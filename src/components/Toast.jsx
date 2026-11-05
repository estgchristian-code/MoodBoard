export default function Toast({ message, actionUrl }) {
  if (!message) return null;

  return (
    <div className="toast show" role="status" aria-live="polite">
      <span className="toast-message">{message}</span>
      {actionUrl && (
        <a className="toast-action" href={actionUrl} target="_blank" rel="noopener noreferrer">
          Abrir imagem
        </a>
      )}
    </div>
  );
}
