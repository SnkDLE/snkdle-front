import { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({ username: "Design Mode" });

  const checkToken = async () => {
    try {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        console.warn("Aucun token trouvé, utilisateur non authentifié");
        return;
      }

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://localhost/api/auth/me",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(response.data);
          } else {
            console.warn("Token invalide ou expiré");
            logout();
          }
        })
        .catch((error) => {
          console.log(error);
          logout();
        });
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
    try {
      const token = localStorage.getItem("auth_token");
      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: "https://localhost/api/auth/logout",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      axios.request(config);
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
