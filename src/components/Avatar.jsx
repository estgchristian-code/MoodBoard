import { useEffect, useState } from "react";
import { imageUrl } from "../services/images.js";

export default function Avatar({ className, profile, pins }) {
  const pin = pins.find((item) => item.id === profile.avatarPinId);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    setUnavailable(false);
  }, [pin?.id]);

  return (
    <span className={className} aria-hidden="true">
      {pin && !unavailable ? (
        <img
          className="avatar-photo"
          src={imageUrl(pin.image, 180)}
          alt=""
          decoding="async"
          onError={() => setUnavailable(true)}
        />
      ) : (
        profile.displayName.trim().charAt(0).toLocaleUpperCase("pt-BR") || "C"
      )}
    </span>
  );
}
