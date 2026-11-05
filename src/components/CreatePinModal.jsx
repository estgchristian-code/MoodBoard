import { useState } from "react";
import ModalShell from "./ModalShell.jsx";
import { createPinCategories } from "../data/categories.js";
import { imageUrl } from "../services/images.js";

export default function CreatePinModal({ pins, onClose, onSubmit }) {
  const [imageId, setImageId] = useState(pins[0]?.id || "");
  const selectedPin = pins.find((pin) => pin.id === imageId);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit({
      title: String(formData.get("title") || "").trim(),
      imageId: String(formData.get("image") || ""),
      category: String(formData.get("category") || "Interiores"),
    });
  }

  return (
    <ModalShell id="create-modal" onClose={onClose}>
      {(closeButtonRef) => (
        <section className="create-modal modal-panel" role="dialog" aria-modal="true" aria-labelledby="create-title">
          <button
            ref={closeButtonRef}
            className="modal-close icon-button"
            type="button"
            onClick={onClose}
            aria-label="Fechar criação"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <div className="create-modal-heading">
            <span className="create-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
            <span className="eyebrow">SUA PRÓXIMA IDEIA</span>
            <h2 id="create-title">Crie um pin</h2>
            <p>Escolha uma imagem e dê um nome para ela.</p>
          </div>
          <form className="create-form" onSubmit={handleSubmit}>
            <label htmlFor="pin-title-input">Nome do pin</label>
            <input
              id="pin-title-input"
              name="title"
              type="text"
              maxLength="64"
              placeholder="Ex.: Um cantinho para chamar de meu"
              required
            />
            <label htmlFor="pin-image-select">Imagem da coleção</label>
            <select
              id="pin-image-select"
              name="image"
              required
              value={imageId}
              onChange={(event) => setImageId(event.target.value)}
            >
              {pins.map((pin) => (
                <option key={pin.id} value={pin.id}>
                  {pin.title}
                </option>
              ))}
            </select>
            <div className="create-preview">
              {selectedPin && (
                <img
                  src={imageUrl(selectedPin.image, 700)}
                  alt={`Prévia de ${selectedPin.title}`}
                />
              )}
            </div>
            <label htmlFor="pin-category-select">Categoria</label>
            <select id="pin-category-select" name="category" defaultValue="Interiores">
              {createPinCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
            <button className="publish-button" type="submit">
              Adicionar à coleção <span aria-hidden="true">↗</span>
            </button>
          </form>
        </section>
      )}
    </ModalShell>
  );
}
