import { useState } from "react";
import Animal from "./Animal";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

function App() {
  const [selectedAnimal, setSelectedAnimal] = useState("cat");
  return (
    <div>
      <h1>Hello Vite!</h1>

      <select onChange={(e) => setSelectedAnimal(e.target.value)}>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="raccoon">Raccoon</option> {/* No image for this yet */}
      </select>

      <Animal selectedAnimal={selectedAnimal} />
    </div>
  );
}

export default App;
