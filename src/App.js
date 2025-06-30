import "./App.css";
import { NightModeProvider } from "./context/NigthModeContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
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
      color: "black",
    },
    typography: {
      subTitle: "black",
    },
    container: {
      primary: "white",
    },
    color: "black",
    bgColor: "white",
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
