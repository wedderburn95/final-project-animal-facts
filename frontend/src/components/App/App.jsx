import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext/AuthContext.jsx";

import Header from "../Header/Header.jsx";
import About from "../../pages/About.jsx";
import Home from "../../pages/Home.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import SignupModal from "../SignupModal/SignupModal.jsx";

import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <AuthProvider>
      <>
        <Header
          onLoginClick={() => setIsLoginOpen(true)}
          onSignupClick={() => setIsSignupOpen(true)}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />

        {/* Modals */}
        <LoginModal
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
        <SignupModal
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
        />
      </>
    </AuthProvider>
  );
}

export default App;
