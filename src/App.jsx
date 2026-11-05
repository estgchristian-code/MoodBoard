import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePinModal from "./components/CreatePinModal.jsx";
import NotificationDetailModal from "./components/NotificationDetailModal.jsx";
import PinModal from "./components/PinModal.jsx";
import Toast from "./components/Toast.jsx";
import { pins as catalogPins } from "./data/pins.js";
import HomePage from "./pages/HomePage.jsx";
import {
  filenameFromTitle,
  imageUrl,
} from "./services/images.js";
import {
  persistValue,
  readReducedMotionPreference,
  readStoredIds,
  readStoredNotifications,
  readStoredPins,
  readStoredProfile,
  storageKeys,
} from "./services/storage.js";

export default function App() {
  const [profile, setProfile] = useState(readStoredProfile);
  const [customPins, setCustomPins] = useState(readStoredPins);
  const [savedPins, setSavedPins] = useState(() => readStoredIds(storageKeys.savedPins));
  const [notifications, setNotifications] = useState(readStoredNotifications);
  const [currentView, setCurrentView] = useState("home");
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const [search, setSearch] = useState("");
  const [activePopover, setActivePopover] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [selectedPin, setSelectedPin] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [toast, setToast] = useState({ message: "", actionUrl: "" });
  const [reduceMotion, setReduceMotion] = useState(() => readReducedMotionPreference(profile));
  const lastFocusedElement = useRef(null);
  const toastTimer = useRef(null);
  const searchInputRef = useRef(null);

  const allPins = useMemo(() => [...customPins, ...catalogPins], [customPins]);
  const visiblePins = useMemo(() => {
    let result = allPins;
    if (currentView === "saved") {
      result = result.filter((pin) => savedPins.includes(pin.id));
    }
    if (activeCategory !== "Tudo") {
      result = result.filter((pin) => pin.category === activeCategory);
    }
    const query = search.trim().toLocaleLowerCase("pt-BR");
    if (query) {
      result = result.filter((pin) =>
        `${pin.title} ${pin.category} ${pin.creator || ""} ${pin.description || ""}`
          .toLocaleLowerCase("pt-BR")
          .includes(query),
      );
    }
    return result;
  }, [activeCategory, allPins, currentView, savedPins, search]);

  const showToast = useCallback((message, actionUrl = "") => {
    window.clearTimeout(toastTimer.current);
    setToast({ message, actionUrl });
    toastTimer.current = window.setTimeout(
      () => setToast({ message: "", actionUrl: "" }),
      actionUrl ? 8000 : 2400,
    );
  }, []);

  const closePopover = useCallback(
    (restoreFocus = false) => {
      if (restoreFocus) activePopover?.trigger?.focus();
      setActivePopover(null);
    },
    [activePopover],
  );

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setSelectedNotification(null);
  }, []);

  const openModal = useCallback((name) => {
    lastFocusedElement.current = document.activeElement;
    setActiveModal(name);
    setActivePopover(null);
  }, []);

  const openPopover = useCallback((kind, trigger) => {
    if (activePopover?.kind === kind) {
      closePopover();
      return;
    }
    setActivePopover({ kind, trigger });
  }, [activePopover, closePopover]);

  useEffect(() => {
    document.documentElement.dataset.reduceMotion = String(reduceMotion);
    try {
      localStorage.setItem(storageKeys.reducedMotion, String(reduceMotion));
    } catch (error) {
      console.error("Não foi possível salvar as preferências de exibição.", error);
    }
  }, [reduceMotion]);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    if (!activeModal && lastFocusedElement.current?.isConnected) {
      lastFocusedElement.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closePopover(true);
        closeModal();
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal, closePopover]);

  useEffect(
    () => () => {
      window.clearTimeout(toastTimer.current);
    },
    [],
  );

  function persistState(key, value, setValue, errorMessage) {
    if (persistValue(key, value)) {
      setValue(value);
      return true;
    }
    showToast(errorMessage);
    return false;
  }

  function changeView(view) {
    setCurrentView(view);
    if (view === "explore") {
      setActiveCategory("Tudo");
      setSearch("");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateSearch(value) {
    setSearch(value);
    if (value.trim()) setCurrentView("explore");
  }

  function toggleSaved(id) {
    const nextSaved = savedPins.includes(id)
      ? savedPins.filter((savedId) => savedId !== id)
      : [id, ...savedPins];
    if (
      persistState(
        storageKeys.savedPins,
        nextSaved,
        setSavedPins,
        "Não foi possível atualizar os pins salvos neste dispositivo",
      )
    ) {
      showToast(savedPins.includes(id) ? "Imagem removida dos salvos" : "Imagem salva na sua coleção");
    }
  }

  function saveProfile(nextProfile) {
    if (
      persistState(
        storageKeys.profile,
        nextProfile,
        setProfile,
        "Não foi possível salvar o perfil neste dispositivo",
      )
    ) {
      showToast("Perfil atualizado neste dispositivo");
    }
  }

  function toggleReducedMotion(enabled) {
    const nextProfile = {
      ...profile,
      preferences: { ...profile.preferences, reducedMotion: enabled },
    };
    if (
      persistState(
        storageKeys.profile,
        nextProfile,
        setProfile,
        "A preferência não pôde ser salva neste dispositivo",
      )
    ) {
      setReduceMotion(enabled);
    }
  }

  function updateNotifications(nextNotifications) {
    persistState(
      storageKeys.notifications,
      nextNotifications,
      setNotifications,
      "Não foi possível atualizar as notificações neste dispositivo",
    );
  }

  function selectNotification(notification) {
    const nextNotifications = notifications.map((item) =>
      item.id === notification.id ? { ...item, read: true } : item,
    );
    updateNotifications(nextNotifications);
    setActivePopover(null);

    if (notification.type === "image" && typeof notification.pinId === "string") {
      const relatedPin = allPins.find((pin) => pin.id === notification.pinId);
      if (relatedPin) {
        setSelectedPin(relatedPin);
        openModal("pin");
      } else {
        console.error(`A imagem relacionada à notificação "${notification.id}" não foi encontrada.`);
        showToast("A imagem desta notificação não está disponível");
      }
      return;
    }

    setSelectedNotification(notification);
    openModal("notification");
  }

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (error) {
        console.warn("A API de área de transferência não está disponível; tentando método alternativo.", error);
      }
    }

    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.append(input);
    input.select();
    const copied = document.execCommand("copy");
    input.remove();
    if (!copied) throw new Error("O navegador não permitiu copiar o link.");
  }

  async function sharePin(id) {
    const pin = allPins.find((item) => item.id === id);
    if (!pin) {
      showToast("Não foi possível encontrar esta imagem.");
      return;
    }
    const url = imageUrl(pin.image, 2400);
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: pin.title,
          text: pin.description || "Confira esta imagem.",
          url,
        });
        showToast("Link da imagem compartilhado");
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
        console.warn("O compartilhamento nativo falhou; tentando copiar o link.", error);
      }
    }
    try {
      await copyText(url);
      showToast("Link da imagem copiado");
    } catch (error) {
      console.error("Não foi possível compartilhar nem copiar o link da imagem.", error);
      showToast("Não foi possível copiar. Abra a imagem para compartilhar.", url);
    }
  }

  async function downloadPin(id) {
    const pin = allPins.find((item) => item.id === id);
    if (!pin) {
      showToast("Não foi possível encontrar esta imagem.");
      return;
    }
    const url = imageUrl(pin.image, 2400).replace("fit=crop", "fit=max").replace("q=82", "q=90");
    showToast("Preparando imagem para download...");
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`O servidor respondeu com status ${response.status}.`);
      const blob = await response.blob();
      if (!blob.size || !blob.type.startsWith("image/")) {
        throw new Error("A resposta não contém uma imagem válida.");
      }
      const extension =
        ({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/avif": "avif" })[
          blob.type
        ] || "jpg";
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = filenameFromTitle(pin.title, extension);
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
      showToast("Download iniciado");
    } catch (error) {
      console.error(`Não foi possível baixar a imagem "${pin.title}".`, error);
      showToast("Download indisponível. Você pode abrir a imagem original:", url);
    }
  }

  function openPin(pin) {
    setSelectedPin(pin);
    openModal("pin");
  }

  function createPin({ title, imageId, category }) {
    const imagePin = allPins.find((pin) => pin.id === imageId);
    if (!imagePin || !title) return;
    const createdPin = {
      id: `custom-${Date.now()}`,
      title,
      category,
      creator: "Sua coleção",
      initials: "C",
      description: "Uma ideia adicionada à sua coleção pessoal.",
      image: imagePin.image,
      height: imagePin.height || 450,
    };
    const nextCustomPins = [createdPin, ...customPins];
    if (
      !persistState(
        storageKeys.customPins,
        nextCustomPins,
        setCustomPins,
        "Não foi possível salvar o pin neste dispositivo",
      )
    ) {
      return;
    }
    setActiveModal(null);
    setCurrentView("home");
    setActiveCategory("Tudo");
    setSearch("");
    showToast("Seu pin foi adicionado à coleção");
  }

  function openCreateModal() {
    setActivePopover(null);
    openModal("create");
  }

  function viewSavedFromProfile() {
    closePopover();
    changeView("saved");
  }

  function resetResults() {
    setCurrentView("home");
    setActiveCategory("Tudo");
    setSearch("");
  }

  function exploreFeaturedCollection() {
    setSearch("interiores");
    setCurrentView("explore");
    document.querySelector(".pin-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <>
      <Sidebar
        currentView={currentView}
        activePopover={activePopover}
        savedCount={savedPins.length}
        profile={profile}
        pins={allPins}
        onViewChange={changeView}
        onCreate={openCreateModal}
        onOpenPopover={openPopover}
      />
      <main className="main-content">
        <Header
          search={search}
          searchInputRef={searchInputRef}
          onSearch={updateSearch}
          profile={profile}
          pins={allPins}
          reduceMotion={reduceMotion}
          notifications={notifications}
          activePopover={activePopover}
          onOpenPopover={openPopover}
          onClosePopover={closePopover}
          onCreate={openCreateModal}
          onProfileSave={saveProfile}
          onToggleReducedMotion={toggleReducedMotion}
          onViewSaved={viewSavedFromProfile}
          onNotificationSelect={selectNotification}
          onReadAll={() =>
            updateNotifications(notifications.map((item) => ({ ...item, read: true })))
          }
          onClearNotifications={() => updateNotifications([])}
        />
        <HomePage
          currentView={currentView}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onViewChange={changeView}
          searchQuery={search}
          pins={visiblePins}
          savedPins={savedPins}
          onCreate={openCreateModal}
          onSearch={updateSearch}
          onFeaturedCollection={exploreFeaturedCollection}
          onOpenPin={openPin}
          onToggleSaved={toggleSaved}
          onShare={sharePin}
          onDownload={downloadPin}
        />
      </main>
      <MobileNav
        currentView={currentView}
        profile={profile}
        pins={allPins}
        activePopover={activePopover}
        onViewChange={changeView}
        onCreate={openCreateModal}
        onOpenPopover={openPopover}
      />
      <Toast message={toast.message} actionUrl={toast.actionUrl} />
      {activeModal === "pin" && selectedPin && (
        <PinModal
          pin={selectedPin}
          saved={savedPins.includes(selectedPin.id)}
          onClose={closeModal}
          onToggleSaved={toggleSaved}
          onShare={sharePin}
          onDownload={downloadPin}
        />
      )}
      {activeModal === "create" && (
        <CreatePinModal pins={allPins} onClose={closeModal} onSubmit={createPin} />
      )}
      {activeModal === "notification" && selectedNotification && (
        <NotificationDetailModal notification={selectedNotification} onClose={closeModal} />
      )}
      <span className="visually-hidden" aria-live="polite">
        {unreadCount ? `${unreadCount} notificações não lidas` : "Todas as notificações lidas"}
      </span>
    </>
  );
}
