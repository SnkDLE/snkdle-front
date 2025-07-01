import "./App.css";
import "./aot-theme.css";
import { Button, Menu } from "./components/molecules";
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
import { Container, Icons, Typography } from "./components/atoms";
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
    return <Container.Base>{getLogPageContent()}</Container.Base>;
  }

  if (!selectedMode) {
    return (
      <div className="aot-menu-central">
        <div className="aot-header-block">
          <img src="/aot-logo.jpg" alt="Attack on Titan Logo" className="aot-logo" />
          <div className="aot-title">Attack on Titan</div>
          <div className="aot-dle">DLE</div>
          <div className="aot-date">{today}</div>
        </div>
        <div className="aot-menu-btns">
          <button className="aot-btn" onClick={() => setSelectedMode("classique")}> <FaQuestionCircle style={{marginRight:12, fontSize:'1.5em'}}/> Classique</button>
          <button className="aot-btn" onClick={() => setSelectedMode("image")}> <FaRegImage style={{marginRight:12, fontSize:'1.5em'}}/> Image</button>
        </div>
      </div>
    );
  }

  return (
    <div className="aot-mode-content">
      <button className="aot-btn-retour" onClick={() => setSelectedMode(null)}>&larr; Retour au menu</button>
      {getPageContent()}
    </div>
  );
};

export default AppContent;
