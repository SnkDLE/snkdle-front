import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../../aot-theme.css";

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
    <div className="aot-card" style={{marginTop:'2rem', maxWidth:400, marginLeft:'auto', marginRight:'auto'}}>
      <div className="aot-title" style={{marginBottom:'1rem'}}>Connexion</div>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
        <input
          type="text"
          name="login"
          placeholder="Nom d'utilisateur ou email"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
          className="aot-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="aot-input"
        />
        <button type="submit" className="aot-btn">Se connecter</button>
        <p style={{color:'#e0d6c3', textAlign:'center'}}>
          Pas de compte ?{' '}
          <span
            style={{ cursor: "pointer", color: "#b22222", textDecoration:'underline' }}
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
