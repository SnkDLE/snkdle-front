import "./App.css";
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

const AppContent = () => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const [slug, setSlug] = useState("classique");
  const [slugLogin, setSlugLogin] = useState("login");
  const [isDeployed, setIsDeployed] = useState(true);

  const getPageContent = () => {
    switch (slug) {
      case "home":
        return <Accueil />;
      case "classique":
        return <Classique />;
      case "image":
        return <Image />;
      case "about":
        return <About />;
      default:
        return <Accueil />;
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

  const menu = [
    { slug: "classique", text: "Classique" },
    { slug: "image", text: "Image" },
    { slug: "test", text: "Test" },
  ];
  const sousMenu = [
    { slug: "about", text: "About" },
    { slug: "contact", text: "Contact" },
    { slug: "help", text: "Help" },
  ];

  if (!isAuthenticated) {
    return <Container.Base>{getLogPageContent()}</Container.Base>;
  }

  return (
    <>
      <Menu.Bar>
        {menu.map((x, i) => (
          <Menu.Tab key={i} callBack={() => setSlug(x.slug)}>
            {x.text}
          </Menu.Tab>
        ))}
        <Icons.Setting onClick={() => setIsDeployed(!isDeployed)} />
        {isDeployed && (
          <>
            <Button.ToggleNight />
            <Typography.Paragraph>
              Bonjour {user?.username || "Michel"}
            </Typography.Paragraph>
            <Button.Default callBack={logout}>Disconnect</Button.Default>
          </>
        )}
      </Menu.Bar>

      {getPageContent()}

      <Menu.SousMenu>
        {sousMenu.map((x, i) => (
          <Menu.Tab key={i} callBack={() => setSlug(x.slug)}>
            {x.text}
          </Menu.Tab>
        ))}
      </Menu.SousMenu>
    </>
  );
};

export default AppContent;
