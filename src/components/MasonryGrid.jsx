import Masonry from "react-masonry-css";
import PinCard from "./PinCard.jsx";

const breakpointColumns = {
  default: 6,
  1600: 5,
  1280: 4,
  1020: 3,
  760: 3,
  500: 2,
};

export default function MasonryGrid({ pins, savedPins, ...actions }) {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="pin-grid"
      columnClassName="pin-grid_column"
      id="pin-grid"
      aria-live="polite"
      aria-label="Imagens inspiradoras"
    >
      {pins.map((pin) => (
        <PinCard
          key={pin.id}
          pin={pin}
          saved={savedPins.includes(pin.id)}
          {...actions}
        />
      ))}
    </Masonry>
  );
}
