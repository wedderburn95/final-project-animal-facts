import { creatContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = (token) => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
