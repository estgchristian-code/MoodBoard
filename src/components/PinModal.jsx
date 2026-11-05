import { useState } from "react";
import ModalShell from "./ModalShell.jsx";
import { imageUrl } from "../services/images.js";

export default function PinModal({ pin, saved, onClose, onToggleSaved, onShare, onDownload }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <ModalShell id="pin-modal" onClose={onClose}>
      {(closeButtonRef) => (
        <section className="pin-modal modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button
            ref={closeButtonRef}
            className="modal-close icon-button"
            type="button"
            onClick={onClose}
            aria-label="Fechar imagem"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <div className={`modal-image-wrap${unavailable ? " is-unavailable" : ""}`}>
            <img
              className="modal-image"
              src={imageUrl(pin.image, 1300)}
              alt={pin.title}
              onError={() => setUnavailable(true)}
              onLoad={() => setUnavailable(false)}
            />
          </div>
          <div className="modal-content">
            <div className="modal-topline">
              <span className="modal-category" data-category={pin.category}>
                {pin.category}
              </span>
              <div className="modal-actions">
                <button className="modal-action" type="button" aria-label="Compartilhar imagem" onClick={() => onShare(pin.id)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="m8.7 10.7 6.6-4.4m-6.6 7 6.6 4.4" />
                  </svg>
                </button>
                <button className="modal-action" type="button" aria-label="Baixar imagem" onClick={() => onDownload(pin.id)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3" />
                  </svg>
                </button>
                <button className="modal-save" type="button" onClick={() => onToggleSaved(pin.id)}>
                  {saved ? "Salvo" : "Salvar pin"}
                </button>
              </div>
            </div>
            <h2 id="modal-title">{pin.title}</h2>
            <p className="modal-description">
              {pin.description || "Uma ideia para guardar e revisitar quando quiser."}
            </p>
            <div className="modal-credit">
              <div className="credit-avatar">{pin.initials || "V"}</div>
              <div>
                <span>Imagem e autoria</span>
                <a href={pin.source || imageUrl(pin.image, 2400)} target="_blank" rel="noopener noreferrer">
                  {pin.creator || "Sua coleção"}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </ModalShell>
  );
}
