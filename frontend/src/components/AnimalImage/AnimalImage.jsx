import React, { useState, useEffect } from "react";
import "./AnimalImage.css";

function AnimalImage({ src, alt }) {
  const fallbackImage = "https://placehold.co/300x300?text=No+Image";
  const [imgSrc, setImgSrc] = useState(src || fallbackImage);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  if (!imgSrc) return null;

  return (
    <img
      className="Animal__image"
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc("/no-image.png");
      }}
    />
  );
}

export default AnimalImage;
