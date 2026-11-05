import Avatar from "./Avatar.jsx";

function MobileNavButton({ view, currentView, onChange, children, icon }) {
  const iconMarkup =
    icon === "home" ? (
      <>
        <path d="m3.75 10.5 8.25-7 8.25 7v9a1.75 1.75 0 0 1-1.75 1.75h-13A1.75 1.75 0 0 1 3.75 19.5v-9Z" />
        <path d="M9 21.25v-7h6v7" />
      </>
    ) : icon === "explore" ? (
      <>
        <circle cx="10.8" cy="10.8" r="7.05" />
        <path d="m16 16 4.25 4.25" />
      </>
    ) : (
      <path d="M6.5 4.25h11a1.75 1.75 0 0 1 1.75 1.75v14L12 15.65l-7.25 4.35V6A1.75 1.75 0 0 1 6.5 4.25Z" />
    );

  return (
    <button
      className={`mobile-nav-link${currentView === view ? " active" : ""}`}
      type="button"
      onClick={() => onChange(view)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {iconMarkup}
      </svg>
      <span>{children}</span>
    </button>
  );
}

export default function MobileNav({
  currentView,
  profile,
  pins,
  activePopover,
  onViewChange,
  onCreate,
  onOpenPopover,
}) {
  return (
    <nav className="mobile-nav" aria-label="Navegação móvel">
      <MobileNavButton view="home" currentView={currentView} onChange={onViewChange} icon="home">
        Início
      </MobileNavButton>
      <MobileNavButton view="explore" currentView={currentView} onChange={onViewChange} icon="explore">
        Explorar
      </MobileNavButton>
      <button className="mobile-nav-create" type="button" onClick={onCreate} aria-label="Criar um pin">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <MobileNavButton view="saved" currentView={currentView} onChange={onViewChange} icon="saved">
        Salvos
      </MobileNavButton>
      <button
        className="mobile-nav-link mobile-profile"
        type="button"
        aria-label={`Abrir perfil de ${profile.displayName}`}
        aria-haspopup="dialog"
        aria-expanded={activePopover?.kind === "profile"}
        aria-controls="profile-panel"
        onClick={(event) => onOpenPopover("profile", event.currentTarget)}
      >
        <Avatar className="mobile-avatar" profile={profile} pins={pins} />
        <span>Perfil</span>
      </button>
    </nav>
  );
}
