import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  Typography,
  Icons,
  Images,
  Button,
  Form,
  Input,
} from "../atoms";
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
        data: {
          login: loginValue,
          password: password,
        },
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
    <Container.Card>
      <Typography.TitleAot>Connexion</Typography.TitleAot>
      <Form.Form onSubmit={handleSubmit}>
        <Input.Input
          type="text"
          name="login"
          placeholder="Nom d'utilisateur ou email"
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          required
        />
        <Input.Input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button.ButtonMenu type="submit">Se connecter</Button.ButtonMenu>
        <Container.Switch>
          Pas de compte ?
          <Typography.SwitchLoginRegister onClick={switchToRegister}>
            S'inscrire
          </Typography.SwitchLoginRegister>
        </Container.Switch>
      </Form.Form>
    </Container.Card>
  );
};

export default LoginPage;
