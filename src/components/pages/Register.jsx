import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.token); // auto-login après inscription
      } else {
        alert(data.error || "Erreur d'inscription");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          placeholder="Mot de passe"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">S'inscrire</button>
        <p>
          Déjà un compte ?{" "}
          <button type="button" onClick={switchToLogin}>
            Se connecter
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
