import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in a theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full flex flex-wrap justify-center items-center">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-8 pb-4"></div>
        <ThemeBtn />
        <div className="w-full max-w-sm mx-auto"></div>
        <Card />
      </div>
    </ThemeProvider>
  );
}

export default App;
