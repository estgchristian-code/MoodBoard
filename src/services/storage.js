import { catalogNotificationDefaults } from "../data/notifications.js";

export const storageKeys = {
  savedPins: "moodboard-saved-pins",
  customPins: "moodboard-custom-pins",
  reducedMotion: "moodboard-reduced-motion",
  profile: "moodboard-profile",
  notifications: "moodboard-notifications-v1",
};

function readJson(key, fallback, validate) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return fallback;
    const value = JSON.parse(stored);
    return validate(value) ? value : fallback;
  } catch (error) {
    console.error(`Não foi possível ler ${key} do armazenamento local.`, error);
    return fallback;
  }
}

export function readStoredIds(key) {
  const ids = readJson(key, [], Array.isArray);
  return ids.filter((id) => typeof id === "string");
}

export function readStoredPins() {
  const pins = readJson(storageKeys.customPins, [], Array.isArray);
  return pins.filter(
    (pin) =>
      pin &&
      typeof pin.id === "string" &&
      typeof pin.title === "string" &&
      typeof pin.image === "string" &&
      typeof pin.category === "string",
  );
}

export function readStoredProfile() {
  const data = readJson(
    storageKeys.profile,
    null,
    (value) => value && typeof value === "object" && !Array.isArray(value),
  );
  if (!data) return { displayName: "Seu espaço", avatarPinId: "", preferences: {} };

  return {
    displayName:
      typeof data.displayName === "string" && data.displayName.trim()
        ? data.displayName.trim().slice(0, 40)
        : "Seu espaço",
    avatarPinId: typeof data.avatarPinId === "string" ? data.avatarPinId : "",
    preferences:
      data.preferences &&
      typeof data.preferences === "object" &&
      !Array.isArray(data.preferences)
        ? data.preferences
        : {},
  };
}

export function readStoredNotifications() {
  let stored;
  try {
    stored = localStorage.getItem(storageKeys.notifications);
  } catch (error) {
    console.error("Não foi possível ler as notificações salvas.", error);
    return catalogNotificationDefaults.map((item) => ({ ...item }));
  }
  if (stored === null) {
    const defaults = catalogNotificationDefaults.map((item) => ({ ...item }));
    persistValue(storageKeys.notifications, defaults);
    return defaults;
  }

  try {
    const data = JSON.parse(stored);
    if (!Array.isArray(data)) {
      throw new TypeError("O formato das notificações salvas é inválido.");
    }
    return data.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.message === "string" &&
        typeof item.label === "string" &&
        typeof item.read === "boolean",
    );
  } catch (error) {
    console.error("Não foi possível ler as notificações salvas.", error);
    return catalogNotificationDefaults.map((item) => ({ ...item }));
  }
}

export function persistValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Não foi possível salvar ${key} no armazenamento local.`, error);
    return false;
  }
}

export function readReducedMotionPreference(profile) {
  try {
    return typeof profile.preferences.reducedMotion === "boolean"
      ? profile.preferences.reducedMotion
      : localStorage.getItem(storageKeys.reducedMotion) === "true";
  } catch (error) {
    console.error("Não foi possível ler as preferências de exibição.", error);
    return false;
  }
}
