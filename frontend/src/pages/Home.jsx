import { useState } from "react";
import Animal from "../components/Animal/Animal.jsx";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import "../components/App/App.css";
import "./Home.css"; // Assuming you have some styles for Home

function Home() {
  const [selectedAnimal, setSelectedAnimal] = useState("cat");

  return (
    <div className="App">
      {/* <Header /> */}
      <Main />
      <h2>Click below to see fun animal facts!</h2>

      <label htmlFor="animal-select" className="Select__animal">
        Choose an animal:
      </label>
      <select
        className="Select__dropdown"
        id="animal-select"
        value={selectedAnimal}
        onChange={(e) => setSelectedAnimal(e.target.value)}
      >
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="fox">Fox</option>
        <option value="duck">Duck</option>
        <option value="panda">Panda</option>
        <option value="koala">Koala</option>
      </select>

      <Animal selectedAnimal={selectedAnimal} />
      <Footer />
    </div>
  );
}

export default Home;
