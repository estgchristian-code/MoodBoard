import MasonryGrid from "../components/MasonryGrid.jsx";
import { categories } from "../data/categories.js";

export default function HomePage({
  currentView,
  activeCategory,
  onCategoryChange,
  onViewChange,
  searchQuery,
  pins,
  savedPins,
  onCreate,
  onSearch,
  onFeaturedCollection,
  onOpenPin,
  onToggleSaved,
  onShare,
  onDownload,
}) {
  const heading =
    currentView === "saved"
      ? "Suas ideias favoritas"
      : currentView === "explore"
        ? "Encontre algo novo"
        : "Um pouco de inspiração";
  const subtitle =
    currentView === "saved"
      ? "Tudo o que você guardou, em um só lugar."
      : currentView === "explore"
        ? "Um mundo de ideias esperando para ser descoberto."
        : "Ideias que combinam com o que você está imaginando.";
  const gridHeading =
    currentView === "saved"
      ? "Sua coleção"
      : currentView === "explore"
        ? "Ideias para explorar"
        : searchQuery
          ? "Resultados da busca"
          : "Feito para você";

  return (
    <>
      <section className="page-heading" aria-labelledby="page-title">
        <div className="heading-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            QUARTA-FEIRA, 04 DE NOVEMBRO
          </div>
          <h1 id="page-title">
            {heading}
            <span className="heading-period">.</span>
          </h1>
          <p id="page-subtitle">{subtitle}</p>
        </div>
        <button className="heading-create" id="heading-create-button" type="button" onClick={onCreate}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Criar pin
        </button>
      </section>

      <section className="discovery" aria-label="Ideias em destaque">
        <div className="discovery-copy">
          <span className="discovery-kicker">COLEÇÃO DA SEMANA</span>
          <h2>
            Pequenos refúgios,
            <br />
            grandes respiros.
          </h2>
          <p>Espaços calmos para desacelerar e se sentir em casa.</p>
          <button
            className="discovery-link"
            type="button"
            onClick={onFeaturedCollection}
          >
            Descobrir coleção <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div
          className="discovery-image"
          role="img"
          aria-label="Sala serena com sofá claro, luz natural e detalhes em madeira"
        />
        <div className="discovery-index">
          <span>01</span> / 04
        </div>
      </section>

      <div className="section-toolbar">
        <div className="section-heading">
          <h2 id="grid-heading">{gridHeading}</h2>
          <span className="result-count">
            {pins.length} {pins.length === 1 ? "ideia" : "ideias"}
          </span>
        </div>
        <div className="toolbar-right">
          <div className="filter-list" aria-label="Filtrar por categoria">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-chip${activeCategory === category ? " active" : ""}`}
                type="button"
                data-category={category}
                aria-pressed={activeCategory === category}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="view-button" type="button" aria-label="Visualização em mosaico">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="6.5" height="6.5" rx="1" />
              <rect x="13.5" y="4" width="6.5" height="6.5" rx="1" />
              <rect x="4" y="13.5" width="6.5" height="6.5" rx="1" />
              <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" />
            </svg>
          </button>
        </div>
      </div>

      {pins.length > 0 ? (
        <MasonryGrid
          pins={pins}
          savedPins={savedPins}
          onOpen={onOpenPin}
          onToggleSaved={onToggleSaved}
          onShare={onShare}
          onDownload={onDownload}
        />
      ) : (
        <div className="empty-state">
          <div className="empty-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="7.05" />
              <path d="m16 16 4.25 4.25" />
            </svg>
          </div>
          <h3>{currentView === "saved" ? "Sua coleção começa aqui" : "Nenhuma ideia encontrada"}</h3>
          <p>
            {currentView === "saved"
              ? "Salve as imagens que quiser guardar para depois."
              : "Tente outra busca ou explore novas ideias."}
          </p>
          <button
            className="empty-reset"
            type="button"
            onClick={() => {
              onViewChange("home");
              onCategoryChange("Tudo");
              onSearch("");
            }}
          >
            Ver todas as ideias
          </button>
        </div>
      )}
      <footer className="page-footer">
        <span>Feito para guardar o que inspira.</span>
        <span>
          Um lugar seu, do seu jeito
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 1.5 11.6 8.4 18.5 10l-6.9 1.6L10 18.5l-1.6-6.9L1.5 10l6.9-1.6L10 1.5Z" />
          </svg>
        </span>
      </footer>
    </>
  );
}
