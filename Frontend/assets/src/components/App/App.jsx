import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import About from "../../pages/About.jsx";
import Home from "../../pages/Home.jsx";
import Footer from "../Footer/Footer.jsx";
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
