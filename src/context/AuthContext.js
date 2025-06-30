import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("auth_token");
      const response = await fetch("https://localhost/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setUser(data);
      } else {
        console.warn("Token invalide ou expiré");
        logout();
      }
    } catch (error) {
      console.log("Erreur lors de la vérification du token:", error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const login = (token) => {
    if (!token) {
      console.error("Token is required for login");
      return;
    }
    localStorage.setItem("auth_token", token);
    setIsAuthenticated(true);
    checkToken();
  };

  const logout = async () => {
    const token = localStorage.getItem("auth_token");

    try {
      await fetch("https://localhost/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.warn("Erreur logout backend");
    }

    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
