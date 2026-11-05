import { forwardRef, useEffect, useState } from "react";
import Avatar from "./Avatar.jsx";
import { imageUrl } from "../services/images.js";

const ProfilePanel = forwardRef(function ProfilePanel({
  profile,
  pins,
  reduceMotion,
  onSave,
  onToggleReducedMotion,
  onViewSaved,
  onClose,
}, ref) {
  const [displayName, setDisplayName] = useState(profile.displayName);
  const [avatarPinId, setAvatarPinId] = useState(profile.avatarPinId);
  const selectedPin = pins.find((pin) => pin.id === avatarPinId);

  useEffect(() => {
    setDisplayName(profile.displayName);
    setAvatarPinId(profile.avatarPinId);
  }, [profile.displayName, profile.avatarPinId]);

  function handleSubmit(event) {
    event.preventDefault();
    const name = displayName.trim();
    if (!name) return;
    onSave({ ...profile, displayName: name.slice(0, 40), avatarPinId });
  }

  return (
    <section
      className="floating-panel profile-panel"
      ref={ref}
      id="profile-panel"
      role="dialog"
      aria-label="Perfil e configurações"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="popover-profile">
        <Avatar className="popover-avatar" profile={profile} pins={pins} />
        <div>
          <strong>{profile.displayName}</strong>
          <span>Coleção pessoal neste dispositivo</span>
        </div>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="profile-name-input">Nome de exibição</label>
        <input
          id="profile-name-input"
          name="displayName"
          type="text"
          maxLength="40"
          autoComplete="nickname"
          required
          value={displayName}
          onChange={(event) => setDisplayName(event.target.value)}
        />
        <label htmlFor="profile-avatar-select">Imagem do avatar</label>
        <select
          id="profile-avatar-select"
          name="avatarPinId"
          value={avatarPinId}
          onChange={(event) => setAvatarPinId(event.target.value)}
        >
          <option value="">Usar iniciais</option>
          {pins.map((pin) => (
            <option key={pin.id} value={pin.id}>
              {pin.title} · {pin.category}
            </option>
          ))}
        </select>
        <div className="avatar-choice-preview" aria-live="polite">
          {selectedPin ? (
            <>
              <img src={imageUrl(selectedPin.image, 180)} alt="" decoding="async" />
              {selectedPin.title}
            </>
          ) : (
            <>
              <span className="avatar-preview-initial">
                {profile.displayName.trim().charAt(0).toLocaleUpperCase("pt-BR") || "C"}
              </span>
              Usar iniciais
            </>
          )}
        </div>
        <button className="profile-save-button" type="submit">
          Salvar perfil
        </button>
      </form>
      <button className="popover-link" type="button" onClick={onViewSaved}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 4.25h11a1.75 1.75 0 0 1 1.75 1.75v14L12 15.65l-7.25 4.35V6A1.75 1.75 0 0 1 6.5 4.25Z" />
        </svg>
        <span>Ver pins salvos</span>
        <svg className="popover-chevron" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
      <div className="popover-section-label">PREFERÊNCIAS</div>
      <label className="popover-setting" htmlFor="reduced-motion-toggle">
        <span>
          <strong>Reduzir animações</strong>
          <small>Usar menos movimento na interface</small>
        </span>
        <input
          id="reduced-motion-toggle"
          type="checkbox"
          checked={reduceMotion}
          onChange={(event) => onToggleReducedMotion(event.target.checked)}
        />
        <span className="setting-switch" aria-hidden="true" />
      </label>
      <button className="popover-close profile-popover-close" type="button" aria-label="Fechar perfil" onClick={onClose}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 6 12 12M18 6 6 18" />
        </svg>
      </button>
    </section>
  );
});

export default ProfilePanel;
