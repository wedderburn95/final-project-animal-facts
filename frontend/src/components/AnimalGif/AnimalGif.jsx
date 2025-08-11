import "./AnimalGif.css";

function AnimalGif({ src, alt }) {
  if (!src) return null;
  return (
    <img
      className="Animal__gif"
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://via.placeholder.com/300?text=No+GIF";
      }}
    />
  );
}
export default AnimalGif;
