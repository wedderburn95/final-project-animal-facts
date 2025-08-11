import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../../components/App/App.jsx"; // ✅ fixed path

import "./Main.css";

function Main() {
  return (
    <div className="container">
      <h2>This is my final project main file</h2>
      <p>Final project description will go here.</p>
    </div>
  );
}

export default Main;
