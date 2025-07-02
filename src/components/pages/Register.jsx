import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Container, Typography, Button, Form, Input } from "../atoms";

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
    <Container.Card>
      <Typography.TitleAot>Créer un compte</Typography.TitleAot>
      <Form.Form onSubmit={handleSubmit}>
        <Input.Input
          name="username"
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={handleChange}
          required
        />
        <Input.Input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input.Input
          name="password"
          placeholder="Mot de passe"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button.ButtonMenu type="submit">S'inscrire</Button.ButtonMenu>
        <Container.Switch>
          Pas de compte ?
          <Typography.SwitchLoginRegister onClick={switchToLogin}>
            Se connecter
          </Typography.SwitchLoginRegister>
        </Container.Switch>
      </Form.Form>
    </Container.Card>
  );
};

export default RegisterPage;
