import React, { useState } from "react";
import { registerUser } from "../../utils/api";

function SignupModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(name, email, password);
      alert("Registration successful! You can now log in.");
      onClose();
    } catch (err) {
      setError(err.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

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

          <button type="submit">Sign Up</button>
        </form>
        <button onClick={onClose} className="modal__close">
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupModal;
