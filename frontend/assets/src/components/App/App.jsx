import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.js";
import About from "../../pages/About.js";
import Home from "../../pages/Home.js";
import Footer from "../Footer/Footer.js";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
