import { catalogNotificationDefaults } from "../data/notifications.js";
import { isSafeExternalUrl, isSupportedImageId } from "./images.js";

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
  } catch {
    console.error(`Não foi possível ler ${key} do armazenamento local.`);
    return fallback;
  }
}

export function readStoredIds(key) {
  const ids = readJson(key, [], Array.isArray);
  const validIds = ids.filter((id) => typeof id === "string" && /^[\w-]{1,128}$/.test(id));
  return [...new Set(validIds)].slice(0, 1000);
}

export function readStoredPins() {
  const pins = readJson(storageKeys.customPins, [], Array.isArray);
  return pins
    .filter(
      (pin) =>
        pin &&
        typeof pin === "object" &&
        !Array.isArray(pin) &&
        typeof pin.id === "string" &&
        /^[\w-]{1,128}$/.test(pin.id) &&
        typeof pin.title === "string" &&
        pin.title.trim().length > 0 &&
        pin.title.length <= 120 &&
        typeof pin.image === "string" &&
        isSupportedImageId(pin.image) &&
        typeof pin.category === "string" &&
        pin.category.trim().length > 0 &&
        pin.category.length <= 80,
    )
    .slice(0, 1000)
    .map((pin) => ({
      id: pin.id,
      title: pin.title.trim(),
      category: pin.category.trim(),
      image: pin.image,
      ...(typeof pin.creator === "string" && { creator: pin.creator.slice(0, 80) }),
      ...(typeof pin.initials === "string" && { initials: pin.initials.slice(0, 4) }),
      ...(typeof pin.description === "string" && { description: pin.description.slice(0, 1000) }),
      ...(Number.isFinite(pin.height) &&
        pin.height >= 100 &&
        pin.height <= 2000 && { height: pin.height }),
      ...(isSafeExternalUrl(pin.source) && { source: pin.source }),
    }));
}

function sanitizePreferences(preferences) {
  if (!preferences || typeof preferences !== "object" || Array.isArray(preferences)) return {};

  return Object.fromEntries(
    Object.entries(preferences).filter(([key, value]) => {
      if (!/^[a-zA-Z][\w-]{0,63}$/.test(key) || ["constructor", "prototype"].includes(key)) {
        return false;
      }
      return (
        typeof value === "boolean" ||
        (typeof value === "string" && value.length <= 1000) ||
        (typeof value === "number" && Number.isFinite(value))
      );
    }),
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
    avatarPinId:
      typeof data.avatarPinId === "string" && /^[\w-]{0,128}$/.test(data.avatarPinId)
        ? data.avatarPinId
        : "",
    preferences: sanitizePreferences(data.preferences),
  };
}

function sanitizeNotification(item) {
  if (
    !item ||
    typeof item !== "object" ||
    Array.isArray(item) ||
    typeof item.id !== "string" ||
    !/^[\w-]{1,128}$/.test(item.id) ||
    typeof item.title !== "string" ||
    !item.title.trim() ||
    typeof item.message !== "string" ||
    typeof item.label !== "string" ||
    typeof item.read !== "boolean"
  ) {
    return null;
  }

  return {
    id: item.id,
    title: item.title.trim().slice(0, 120),
    message: item.message.slice(0, 1000),
    label: item.label.slice(0, 120),
    read: item.read,
    type: item.type === "image" ? "image" : "update",
    ...(typeof item.details === "string" && { details: item.details.slice(0, 2000) }),
    ...(typeof item.pinId === "string" &&
      /^[\w-]{1,128}$/.test(item.pinId) && { pinId: item.pinId }),
  };
}

export function readStoredNotifications() {
  let stored;
  try {
    stored = localStorage.getItem(storageKeys.notifications);
  } catch {
    console.error("Não foi possível ler as notificações salvas.");
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
      return catalogNotificationDefaults.map((item) => ({ ...item }));
    }
    return data.map(sanitizeNotification).filter(Boolean).slice(0, 1000);
  } catch {
    console.error("Não foi possível ler as notificações salvas.");
    return catalogNotificationDefaults.map((item) => ({ ...item }));
  }
}

export function persistValue(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    console.error(`Não foi possível salvar ${key} no armazenamento local.`);
    return false;
  }
}

export function readReducedMotionPreference(profile) {
  try {
    return typeof profile.preferences.reducedMotion === "boolean"
      ? profile.preferences.reducedMotion
      : localStorage.getItem(storageKeys.reducedMotion) === "true";
  } catch {
    console.error("Não foi possível ler as preferências de exibição.");
    return false;
  }
}
