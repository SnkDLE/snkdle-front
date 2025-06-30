import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const LoginPage = ({ switchToRegister }) => {
  const [loginValue, setLoginValue] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: "https://localhost/api/auth/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          login: loginValue,
          password: password,
        }),
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.apiToken) {
            login(response.data.apiToken);
          } else {
            alert("Identifiants incorrects");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la connexion:", error);
          alert(error.response?.data?.error || "Erreur de connexion");
        });
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
