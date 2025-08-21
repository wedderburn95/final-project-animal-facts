import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { token, logout } = useContext(AuthContext);
  const [likedAnimals, setLikedAnimals] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetch("http://localhost:5000/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(data.email);
        setLikedAnimals(data.likedAnimals);
      });
  }, [token, navigate]);

  return (
    <div>
      <h2>Welcome, {email}</h2>
      <button onClick={logout}>Logout</button>
      <h3>Liked Animals</h3>
      {likedAnimals.length === 0 ? (
        <p>No liked animals yet.</p>
      ) : (
        <ul>
          {likedAnimals.map((animal, idx) => (
            <li key={idx}>{animal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
