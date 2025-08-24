import React, { useState } from "react";
import { loginUser } from "../../utils/api";
import { useAuth } from "../../context/AuthContext/AuthContext.jsx";

function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(email, password);
      login(data.token); // save token in context/localStorage
      onClose();
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          {error && <p className="modal__error">{error}</p>}

          <button type="submit">Login</button>
        </form>
        <button onClick={onClose} className="modal__close">
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
