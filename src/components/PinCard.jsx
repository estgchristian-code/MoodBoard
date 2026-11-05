import { useEffect, useRef, useState } from "react";
import { imageUrl } from "../services/images.js";

function SaveIcon({ saved }) {
  return saved ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default function PinCard({
  pin,
  saved,
  onOpen,
  onToggleSaved,
  onShare,
  onDownload,
}) {
  const [unavailable, setUnavailable] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [favoriteAnimating, setFavoriteAnimating] = useState(false);
  const favoriteAnimationTimer = useRef(null);

  useEffect(
    () => () => {
      window.clearTimeout(favoriteAnimationTimer.current);
    },
    [],
  );

  function toggleSaved() {
    window.clearTimeout(favoriteAnimationTimer.current);
    setFavoriteAnimating(true);
    favoriteAnimationTimer.current = window.setTimeout(
      () => setFavoriteAnimating(false),
      300,
    );
    onToggleSaved(pin.id);
  }

  return (
    <article className="pin-card" data-pin-id={pin.id}>
      <button
        className={`pin-image-button${unavailable ? " is-unavailable" : ""}${!imageLoaded && !unavailable ? " is-loading" : ""}`}
        type="button"
        onClick={() => onOpen(pin)}
        aria-label={`Ver ${pin.title}`}
      >
        <img
          className="pin-image"
          src={imageUrl(pin.image, 600)}
          alt={pin.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          style={{ aspectRatio: `300 / ${pin.height || 450}` }}
          onError={() => {
            setUnavailable(true);
            setImageLoaded(true);
          }}
          onLoad={() => {
            setUnavailable(false);
            setImageLoaded(true);
          }}
        />
      </button>
      <button
        className={`pin-save${saved ? " is-saved" : ""}${favoriteAnimating ? " is-animating" : ""}`}
        type="button"
        onClick={toggleSaved}
        aria-label={saved ? "Remover dos salvos" : "Salvar imagem"}
        aria-pressed={saved}
      >
        <SaveIcon saved={saved} />
        <span>{saved ? "Salvo" : "Salvar"}</span>
      </button>
      <div className="pin-actions">
        <button
          className="pin-action"
          type="button"
          onClick={() => onShare(pin.id)}
          aria-label={`Compartilhar ${pin.title}`}
          title="Compartilhar"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.4" />
          </svg>
        </button>
        <button
          className="pin-action"
          type="button"
          onClick={() => onDownload(pin.id)}
          aria-label={`Baixar ${pin.title}`}
          title="Baixar imagem"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3" />
          </svg>
        </button>
      </div>
      <div className="pin-card-info">
        <h3 className="pin-card-title">{pin.title}</h3>
        <span className="pin-card-category" data-category={pin.category}>
          {pin.category}
        </span>
      </div>
      <div className="pin-source">
        <span className="source-avatar">{pin.initials || "V"}</span>
        <span>{pin.creator || "Sua coleção"}</span>
      </div>
    </article>
  );
}
