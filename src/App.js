import "./App.css";
import { NightModeProvider } from "./context/NigthModeContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Container } from "./components/atoms";
import AppContent from "./AppContent";

function App() {
  const nightTheme = {
    default: {
      color: "white",
    },
    typography: {
      subTitle: "white",
      link: "cyan",
    },
    container: {
      primary: "black",
    },
    color: "white",
    bgColor: "black",
  };
  const dayTheme = {
    default: {
      color: "#e0d6c3",
    },
    typography: {
      subTitle: "#e0d6c3",
    },
    container: {
      primary: "#e0d6c3",
    },
    color: "#e0d6c3",
    bgColor: "rgba(44, 36, 28, 0.92)",
  };

  const [nightMode, setNightMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return (
    <AuthProvider>
      <ThemeProvider theme={nightMode ? nightTheme : dayTheme}>
        <NightModeProvider
          value={{
            nightMode: nightMode,
            switchNightMode: () => setNightMode(!nightMode),
          }}
        >
          <AppContent />
        </NightModeProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
