import { useEffect, useLayoutEffect, useRef } from "react";
import Avatar from "./Avatar.jsx";
import NotificationPanel from "./NotificationPanel.jsx";
import ProfilePanel from "./ProfilePanel.jsx";

export default function Header({
  search,
  searchInputRef,
  onSearch,
  profile,
  pins,
  reduceMotion,
  notifications,
  activePopover,
  onOpenPopover,
  onClosePopover,
  onCreate,
  onProfileSave,
  onToggleReducedMotion,
  onViewSaved,
  onNotificationSelect,
  onReadAll,
  onClearNotifications,
}) {
  const panelRef = useRef(null);
  const notificationTriggerRef = useRef(null);
  const profileTriggerRef = useRef(null);
  const activePopoverRef = useRef(activePopover);
  activePopoverRef.current = activePopover;

  useLayoutEffect(() => {
    if (!activePopover || !panelRef.current) return undefined;
    const positionPanel = () => {
      const panel = panelRef.current;
      const trigger = activePopover.trigger;
      if (!panel || !trigger) return;
      const triggerRect = trigger.getBoundingClientRect();
      const panelWidth = panel.offsetWidth;
      const panelHeight = panel.offsetHeight;
      const margin = 12;
      const sidebar = trigger.closest(".sidebar");
      const mobileNav = trigger.closest(".mobile-nav");
      const preferredLeft = sidebar
        ? sidebar.getBoundingClientRect().right + 12
        : triggerRect.right - panelWidth;
      const left = Math.max(margin, Math.min(preferredLeft, window.innerWidth - panelWidth - margin));
      const roomBelow = window.innerHeight - triggerRect.bottom;
      const top = mobileNav
        ? mobileNav.getBoundingClientRect().top - panelHeight - 8
        : roomBelow >= panelHeight + margin
          ? triggerRect.bottom + 8
          : triggerRect.top - panelHeight - 8;
      panel.style.left = `${left}px`;
      panel.style.top = `${Math.max(margin, Math.min(top, window.innerHeight - panelHeight - margin))}px`;
    };

    positionPanel();
    window.addEventListener("resize", positionPanel);
    const closeOnScroll = () => onClosePopover();
    window.addEventListener("scroll", closeOnScroll, { capture: true, passive: true });
    return () => {
      window.removeEventListener("resize", positionPanel);
      window.removeEventListener("scroll", closeOnScroll, true);
    };
  }, [activePopover, onClosePopover]);

  useEffect(() => {
    if (!activePopover) return undefined;
    const handleOutsideClick = (event) => {
      const current = activePopoverRef.current;
      if (
        current &&
        !panelRef.current?.contains(event.target) &&
        !current.trigger.contains(event.target) &&
        !event.target.closest("[aria-haspopup='dialog']")
      ) {
        onClosePopover();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [activePopover, onClosePopover]);

  const unread = notifications.filter((item) => !item.read).length;
  const openPopover = (kind, trigger) => {
    if (activePopover?.kind === kind) onClosePopover(true);
    else onOpenPopover(kind, trigger);
  };
  const popoverContent =
    activePopover?.kind === "profile" ? (
      <ProfilePanel
        profile={profile}
        pins={pins}
        reduceMotion={reduceMotion}
        ref={panelRef}
        onSave={onProfileSave}
        onToggleReducedMotion={onToggleReducedMotion}
        onViewSaved={onViewSaved}
        onClose={() => onClosePopover(true)}
      />
    ) : (
      <NotificationPanel
        notifications={notifications}
        onSelect={onNotificationSelect}
        onReadAll={onReadAll}
        onClear={onClearNotifications}
        onClose={() => onClosePopover(true)}
        ref={panelRef}
      />
    );

  return (
    <>
      <header className="topbar">
        <form
          className="search-wrap"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            onSearch(search);
          }}
        >
          <svg className="search-icon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="7.05" />
            <path d="m16 16 4.25 4.25" />
          </svg>
          <input
            ref={searchInputRef}
            type="search"
            placeholder="Buscar imagens e inspirações..."
            autoComplete="off"
            aria-label="Buscar imagens"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
          />
          {search && (
            <button
              className="search-clear"
              type="button"
              aria-label="Limpar pesquisa"
              onClick={() => {
                onSearch("");
                searchInputRef.current?.focus();
              }}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          )}
          <kbd aria-hidden="true">⌘ K</kbd>
        </form>
        <div className="topbar-actions">
          <button
            ref={notificationTriggerRef}
            className="icon-button notification-button"
            id="notification-button"
            type="button"
            aria-label={unread ? `Notificações, ${unread} não lidas` : "Notificações"}
            aria-haspopup="dialog"
            aria-expanded={activePopover?.kind === "notifications"}
            aria-controls="notification-panel"
            onClick={(event) => openPopover("notifications", event.currentTarget)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
            </svg>
            {unread > 0 && (
              <span className="notification-count" id="notification-count">{unread > 99 ? "99+" : unread}</span>
            )}
          </button>
          <button className="top-create" id="top-create-button" type="button" onClick={onCreate}>
            <span>+</span> Criar
          </button>
          <button
            ref={profileTriggerRef}
            className="top-avatar"
            type="button"
            aria-label={`Abrir perfil de ${profile.displayName}`}
            aria-haspopup="dialog"
            aria-expanded={activePopover?.kind === "profile"}
            aria-controls="profile-panel"
            onClick={(event) => openPopover("profile", event.currentTarget)}
          >
            <Avatar className="top-avatar-inner" profile={profile} pins={pins} />
          </button>
        </div>
      </header>
      {activePopover && popoverContent}
    </>
  );
}
