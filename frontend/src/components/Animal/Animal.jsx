import { useEffect, useState } from "react";
// import AnimalImage from "./AnimalImage";
// import AnimalFact from "./AnimalFact";
// import AnimalGif from "./AnimalGif";
import "./Animal.css";

const GIPHY_API_KEY = "7yD8XoicQkrVDqQBN9lUiNUlWZuyXM81";

function Animal({ selectedAnimal }) {
  const [animalData, setAnimalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gifUrl, setGifUrl] = useState(null);

  const fetchAnimalAndGif = async () => {
    setLoading(true);
    setError(null);

    try {
      let fact = "";
      let image = "";

      if (selectedAnimal === "cat") {
        const res = await fetch("https://catfact.ninja/fact");
        if (!res.ok) throw new Error("Failed to fetch cat fact");
        const data = await res.json();
        fact = data.fact;
        image = "https://cataas.com/cat?width=300";
      } else if (selectedAnimal === "dog") {
        const res = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!res.ok) throw new Error("Failed to fetch dog image");
        const data = await res.json();
        fact = "Dogs are loyal and great companions.";
        image = data.message;
      } else if (selectedAnimal === "fox") {
        const res = await fetch("https://randomfox.ca/floof/");
        if (!res.ok) throw new Error("Failed to fetch fox image");
        const data = await res.json();
        fact = "Foxes are known for their cunning nature.";
        image = data.image;
      } else if (selectedAnimal === "duck") {
        fact = "Ducks have waterproof feathers";
        image = "https://random-d.uk/api/randomimg";
      } else if (selectedAnimal === "panda") {
        fact = "Pandas spend up to 14 hours a day eating bamboo.";
        image =
          "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG";
      } else if (selectedAnimal === "koala") {
        fact = "Koala's sleep up to 20 hours a day";
        image =
          "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg";
      } else {
        fact = "No info available for this animal.";
        image = "";
      }

      setAnimalData({ fact, image });

      // Fetch GIF
      const gifRes = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${selectedAnimal}&limit=1`
      );

      if (!gifRes.ok) throw new Error("Failed to fetch GIF");
      const gifData = await gifRes.json();
      const gif =
        gifData.data.length > 0 ? gifData.data[0].images.downsized.url : null;
      setGifUrl(gif);
    } catch (err) {
      console.error(err);
      setError("⚠️ Failed to fetch animal data or gif.");
      setAnimalData(null);
      setGifUrl(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAnimalAndGif();
  }, [selectedAnimal]);

  function handleRetry() {
    fetchAnimalAndGif();
  }

  if (loading) {
    return <div className="Animal__spinner" />;
  }

  if (error) {
    return (
      <div className="Animal__error">
        <p>{error}</p>
        <button className="Animal__retry" onClick={handleRetry}>
          🔁 Retry
        </button>
      </div>
    );
  }

  if (!animalData) {
    return <p className="Animal__error">No animal data found.</p>;
  }

  return (
    <div className="Animal">
      <h2 className="Animal__type">{selectedAnimal}</h2>
      <p>{animalData.fact}</p>
      {animalData.image && (
        <img
          className="Animal__image"
          src={animalData.image}
          alt={selectedAnimal}
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = "https://via.placeholder.com/300?text=No+Image";
          }}
        />
      )}
      {gifUrl && (
        <img
          className="Animal__gif"
          src={gifUrl}
          alt={`${selectedAnimal} gif`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300?text=No+GIF";
          }}
        />
      )}
    </div>
  );
}

export default Animal;
