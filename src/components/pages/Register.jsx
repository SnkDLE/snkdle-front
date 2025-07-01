import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../../aot-theme.css";

const RegisterPage = ({ switchToLogin }) => {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: "https://localhost/api/auth/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      };

      axios
        .request(config)
        .then((response) => {
          if (response.data.apiToken) {
            login(response.data.apiToken);
          } else {
            alert("Erreur lors de l'inscription");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de l'inscription:", error);
          alert(error.response?.data?.error || "Erreur d'inscription");
        });
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    }
  };

  return (
    <div className="aot-card" style={{marginTop:'2rem', maxWidth:400, marginLeft:'auto', marginRight:'auto'}}>
      <div className="aot-title" style={{marginBottom:'1rem'}}>Créer un compte</div>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
        <input
          name="username"
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={handleChange}
          required
          className="aot-input"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="aot-input"
        />
        <input
          name="password"
          placeholder="Mot de passe"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
          className="aot-input"
        />
        <button type="submit" className="aot-btn">S'inscrire</button>
        <p style={{color:'#e0d6c3', textAlign:'center'}}>
          Déjà un compte ?{' '}
          <button type="button" onClick={switchToLogin} className="aot-btn" style={{padding:'0.2rem 1rem', fontSize:'1rem'}}>Se connecter</button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
