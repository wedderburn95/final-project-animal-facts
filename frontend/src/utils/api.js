const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL // deployed backend
    : "http://localhost:3001"; // local backend

// helper to handle errors consistently
export async function checkResponse(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `Error: ${response.status}`);
  }
  return response.json();
}

export async function getAnimalData(animal) {
  const response = await fetch(`${BASE_URL}/api/animals/${animal}`);
  return checkResponse(response);
}

export async function registerUser(name, email, password) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  return checkResponse(response);
}

export async function loginUser(email, password) {
  const response = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return checkResponse(response);
}

export async function getProfile(token) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return checkResponse(response);
}
