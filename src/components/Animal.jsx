import { useEffect, useState } from "react";

import "./Animal.css";

function Animal({ selectedAnimal }) {
  const [animalData, setAnimalData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnimal() {
      setLoading(true);

      try {
        if (selectedAnimal === "cat") {
          const res = await fetch("https://catfact.ninja/fact");
          const data = await res.json();
          setAnimalData({
            fact: data.fact,
            image: "https://cataas.com/cat?width=300",
          });
        } else if (selectedAnimal === "dog") {
          const res = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await res.json();
          setAnimalData({
            fact: "Dogs are loyal and great companions.",
            image: data.message,
          });
        } else if (selectedAnimal === "fox") {
          const res = await fetch("https://randomfox.ca/floof/");
          const data = await res.json();
          setAnimalData({
            fact: "Foxes are known for their cunning nature.",
            image: data.image,
          });
        } else if (selectedAnimal === "duck") {
          setAnimalData({
            fact: "Ducks have waterproof feathers",
            image: "https://random-d.uk/api/randomimg",
          });
        } else {
          setAnimalData({
            fact: "No info available for this animal.",
            image: "",
          });
        }
      } catch (err) {
        console.error(err);
        setAnimalData({
          fact: "Error fetching data.",
          image: "",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchAnimal();
  }, [selectedAnimal]);

  if (loading) return <p>Loading...</p>;
  if (!animalData) return <p>No animal data found.</p>;

  return (
    <div className="Animal">
      <h2 className="Animal__type">{selectedAnimal.toUpperCase()}</h2>
      <p>{animalData.fact}</p>
      {animalData.image && (
        <img
          className="Animal__image"
          src={animalData.image}
          alt={selectedAnimal}
          width="300"
        />
      )}
    </div>
  );
}

export default Animal;
