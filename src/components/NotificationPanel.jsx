import { forwardRef } from "react";

const NotificationPanel = forwardRef(function NotificationPanel({
  notifications,
  onSelect,
  onReadAll,
  onClear,
  onClose,
}, ref) {
  const unread = notifications.filter((item) => !item.read).length;

  return (
    <section
      ref={ref}
      id="notification-panel"
      className="floating-panel notification-panel"
      role="dialog"
      aria-label="Notificações"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="notification-panel-heading">
        <div>
          <h2>Notificações</h2>
          <p>Novidades e atualizações do catálogo</p>
        </div>
        <button
          className="popover-close"
          type="button"
          aria-label="Fechar notificações"
          onClick={onClose}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      {notifications.length > 0 && (
        <div className="notification-toolbar">
          <span>{unread ? `${unread} não ${unread === 1 ? "lida" : "lidas"}` : "Todas lidas"}</span>
          <div>
            <button type="button" onClick={onReadAll} disabled={unread === 0}>
              Marcar lidas
            </button>
            <button type="button" onClick={onClear}>
              Limpar
            </button>
          </div>
        </div>
      )}
      <div className="notification-list" role="list" aria-live="polite">
        {notifications.map((item) => (
          <article
            className={`notification-entry${item.read ? " is-read" : ""}`}
            role="listitem"
            key={item.id}
          >
            <button
              className="notification-item"
              type="button"
              onClick={() => onSelect(item)}
              aria-label={`${item.title}, ${item.read ? "lida" : "não lida"}; abrir detalhes`}
            >
              <span className="notification-item-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4.5 19.5h15M6 16.5l4.3-4.3 3.2 2.4 4.5-6.1" />
                  <path d="M14.5 8.5H18v3.5" />
                </svg>
              </span>
              <span className="notification-item-copy">
                <strong>{item.title}</strong>
                <span>{item.message}</span>
                <small>{item.label}</small>
              </span>
              <span className="notification-unread-dot" aria-hidden="true" />
            </button>
          </article>
        ))}
      </div>
      {notifications.length === 0 && (
        <div className="notification-empty">
          <span className="notification-empty-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <strong>Tudo em dia</strong>
          <p>Novidades e atualizações futuras do catálogo aparecerão aqui.</p>
        </div>
      )}
    </section>
  );
});

export default NotificationPanel;
