import ModalShell from "./ModalShell.jsx";

export default function NotificationDetailModal({ notification, onClose }) {
  return (
    <ModalShell id="notification-detail-modal" onClose={onClose}>
      {(closeButtonRef) => (
        <section
          className="notification-detail-modal modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notification-detail-title"
        >
          <button
            ref={closeButtonRef}
            className="modal-close icon-button"
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes da notificação"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <span className="notification-detail-label">{notification.label}</span>
          <h2 id="notification-detail-title">{notification.title}</h2>
          <p>{notification.details || notification.message}</p>
        </section>
      )}
    </ModalShell>
  );
}
