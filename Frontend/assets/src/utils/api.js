const BASE_URL = "https://some-random-api.ml/animal";

export async function getAnimalData(animal) {
  try {
    const response = await fetch(`${BASE_URL}/${animal}`);
    if (!response.ok) {
      throw new Error("Failed to fetch animal data");
    }
    return await response.json(); // { fact: "...", image: "..." }
  } catch (error) {
    console.error(error);
    return null;
  }
}