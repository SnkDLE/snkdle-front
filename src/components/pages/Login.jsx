import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = ({ switchToRegister }) => {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://localhost/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login: loginValue, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.apiToken);
      } else {
        const err = await response.json();
        alert(err.error || "Erreur de connexion");
      }
    } catch (error) {
      alert("Erreur réseau");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="Nom d'utilisateur ou email"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Se connecter</button>
        <br />
        <p>
          Pas de compte ?{" "}
          <span
            style={{ cursor: "pointer", color: "blue" }}
            onClick={switchToRegister}
          >
            S'inscrire
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
