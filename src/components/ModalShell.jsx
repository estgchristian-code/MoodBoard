import { useEffect, useRef } from "react";

export default function ModalShell({
  children,
  onClose,
  backdropClassName = "",
  id,
}) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div
      className={`modal-backdrop ${backdropClassName}`.trim()}
      id={id}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {children(closeButtonRef)}
    </div>
  );
}
