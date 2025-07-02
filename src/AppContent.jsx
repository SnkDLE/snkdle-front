import "./App.css";
import { useState, useContext } from "react";
import {
  Accueil,
  Classique,
  Image,
  About,
  Login,
  Register,
} from "./components/pages";
import { AuthContext } from "./context/AuthContext";
import {
  Container,
  Icons,
  Typography,
  Images,
  Button,
} from "./components/atoms";
import { FaQuestionCircle, FaRegImage } from "react-icons/fa";

const AppContent = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [selectedMode, setSelectedMode] = useState(null);
  const [slugLogin, setSlugLogin] = useState("login");
  const [isDeployed, setIsDeployed] = useState(false);

  const today = new Date().toLocaleDateString("fr-FR");

  const getPageContent = () => {
    switch (selectedMode) {
      case "classique":
        return <Classique />;
      case "image":
        return <Image />;
      case "about":
        return <About />;
      default:
        return <Classique />;
    }
  };

  const getLogPageContent = () => {
    switch (slugLogin) {
      case "login":
        return <Login switchToRegister={() => setSlugLogin("register")} />;
      case "register":
        return <Register switchToLogin={() => setSlugLogin("login")} />;
      default:
        return <Login switchToRegister={() => setSlugLogin("register")} />;
    }
  };

  if (!isAuthenticated) {
    return (
      <Container.All>
        <Container.Base>{getLogPageContent()}</Container.Base>
      </Container.All>
    );
  }

  if (!selectedMode) {
    return (
      <Container.All>
        <Container.MenuContainer>
          <Container.HeaderMenu>
            <Images.Logo
              src="/aot-logo.jpg"
              alt="Attack on Titan Logo"
              className="aot-logo"
            />
            <Typography.TitleAot>Attack on Titan</Typography.TitleAot>
            <Typography.Dle>DLE</Typography.Dle>
            <Typography.Today>{today}</Typography.Today>
          </Container.HeaderMenu>
          <Container.ButtonMenu>
            <Button.ButtonMenu onClick={() => setSelectedMode("classique")}>
              <FaQuestionCircle
                style={{ marginRight: 12, fontSize: "1.5em" }}
              />
              Classique
            </Button.ButtonMenu>
            <Button.ButtonMenu onClick={() => setSelectedMode("image")}>
              <FaRegImage style={{ marginRight: 12, fontSize: "1.5em" }} />{" "}
              Image
            </Button.ButtonMenu>
          </Container.ButtonMenu>
        </Container.MenuContainer>
      </Container.All>
    );
  }

  return (
    <Container.All>
      <Container.ModeContent>
        <Button.ButtonReturn onClick={() => setSelectedMode(null)}>
          &larr; Retour au menu
        </Button.ButtonReturn>
        {getPageContent()}
      </Container.ModeContent>
    </Container.All>
  );
};

export default AppContent;
