const express = require("express");
const router = express.Router();

let animals = [
  {
    id: 1,
    name: "Cat",
    fact: "Cats have five toes on their front paws, but only four on the back ones.",
    image: "https://catfact.ninja/fact",
  },
  {
    id: 2,
    name: "Dog",
    fact: "Dogs' sense of smell is about 40 times better than ours.",
    image: "https://images.dog.ceo/breeds/labrador/n02099712_4505.jpg",
  },
  {
    id: 3,
    name: "Fox",
    fact: "Foxes have whiskers on their legs and face, which help them navigate.",
    image: "https://randomfox.ca/images/32.jpg",
  },
  {
    id: 4,
    name: "Duck",
    fact: "Ducks have waterproof feathers.",
    image: "https://random-d.uk/api/249.jpg",
  },
  {
    id: 5,
    name: "Panda",
    fact: "Pandas spend up to 14 hours a day eating bamboo.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
  },
  {
    id: 6,
    name: "Koala",
    fact: "Koalas sleep up to 20 hours a day.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg",
  },
];

router.get("/", (req, res) => {
  res.json(animals);
});

router.post("/", (req, res) => {
  const { name, fact } = req.body;
  const newAnimal = { id: Date.now(), name, fact };
  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

module.exports = router;
