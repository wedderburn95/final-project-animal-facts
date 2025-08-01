import { useState } from "react";
import Animal from "./Animal";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("cat");
  return (
    <div>
      <Main />
      <Header />
      <h2>Click below to see fun animal facts!</h2>

      <select
        className="Select__animal"
        onChange={(e) => setSelectedAnimal(e.target.value)}
      >
        <div className="Select__animal-type">
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="fox">Fox</option>
          <option value="duck">Duck</option>
        </div>
      </select>

      <Animal selectedAnimal={selectedAnimal} />
      <Footer />
    </div>
  );
}

export default App;
