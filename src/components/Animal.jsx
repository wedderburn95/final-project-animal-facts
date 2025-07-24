import { data } from "../utils/constants.jsx";

function Animal({ selectedAnimal }) {
  const animal = data.find((item) => item.name === selectedAnimal);

  if (!animal) {
    return <p>Animal not found</p>;
  }

  return (
    <div>
      <h2>{animal.name}</h2>
      <img src={animal.image} alt={animal.name} />
    </div>
  );
}

export default Animal;
