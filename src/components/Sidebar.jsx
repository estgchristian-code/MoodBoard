import Avatar from "./Avatar.jsx";

function NavIcon({ name }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3.75 10.5 8.25-7 8.25 7v9a1.75 1.75 0 0 1-1.75 1.75h-13A1.75 1.75 0 0 1 3.75 19.5v-9Z" />
        <path d="M9 21.25v-7h6v7" />
      </svg>
    );
  }
  if (name === "explore") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.8" cy="10.8" r="7.05" />
        <path d="m16 16 4.25 4.25m-11.55-3.5 1.3-3.4 3.2-1.35-1.3 3.45-3.2 1.3Z" />
      </svg>
    );
  }
  if (name === "saved") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 4.25h11a1.75 1.75 0 0 1 1.75 1.75v14L12 15.65l-7.25 4.35V6A1.75 1.75 0 0 1 6.5 4.25Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#" aria-label="moodboard, início">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 34 34" fill="none">
          <rect x="2.8" y="2.8" width="28.4" height="28.4" rx="9" fill="#D94F3D" />
          <circle cx="23" cy="11.5" r="2.2" fill="#fff" />
          <path d="m6.8 24 6.6-7.1 4.5 4.3 2.3-2.4 7 5.2H6.8Z" fill="#fff" />
        </svg>
      </span>
      <span className="brand-name">
        moodboard<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

function NavButton({ view, currentView, onChange, children, icon, count }) {
  return (
    <button
      className={`nav-link${currentView === view ? " active" : ""}`}
      data-view={view}
      type="button"
      onClick={() => onChange(view)}
    >
      <NavIcon name={icon} />
      <span>{children}</span>
      {count !== undefined && <span className="saved-count">{count}</span>}
    </button>
  );
}

export default function Sidebar({
  currentView,
  activePopover,
  savedCount,
  profile,
  pins,
  onViewChange,
  onCreate,
  onOpenPopover,
}) {
  return (
    <aside className="sidebar" aria-label="Navegação principal">
      <Brand />
      <div className="sidebar-label">MENU</div>
      <nav className="primary-nav">
        <NavButton view="home" currentView={currentView} onChange={onViewChange} icon="home">
          Início
        </NavButton>
        <NavButton view="explore" currentView={currentView} onChange={onViewChange} icon="explore">
          Explorar
        </NavButton>
      </nav>

      <div className="sidebar-label sidebar-label-spaced">SUA COLEÇÃO</div>
      <nav className="primary-nav">
        <NavButton
          view="saved"
          currentView={currentView}
          onChange={onViewChange}
          icon="saved"
          count={savedCount}
        >
          Salvos
        </NavButton>
        <button className="nav-link create-nav" id="create-button" type="button" onClick={onCreate}>
          <NavIcon name="create" />
          <span>Criar um pin</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-note">
          <span className="note-spark" aria-hidden="true">
            <svg viewBox="0 0 20 20">
              <path d="M10 1.5 11.6 8.4 18.5 10l-6.9 1.6L10 18.5l-1.6-6.9L1.5 10 10 1.5Z" />
            </svg>
          </span>
          <p>Ideias bonitas merecem um lugar especial.</p>
        </div>
        <div className="profile">
          <Avatar className="profile-avatar" profile={profile} pins={pins} />
          <div className="profile-copy">
            <strong>{profile.displayName}</strong>
            <span>coleção pessoal</span>
          </div>
          <button
            className="icon-button profile-menu"
            type="button"
            aria-label={`Opções do perfil de ${profile.displayName}`}
            aria-haspopup="dialog"
            aria-expanded={activePopover?.kind === "profile"}
            aria-controls="profile-panel"
            onClick={(event) => onOpenPopover("profile", event.currentTarget)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
