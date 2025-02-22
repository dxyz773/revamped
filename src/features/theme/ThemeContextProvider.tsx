import { useEffect, useState } from "react";
import { Theme, ThemeProviderProps } from "./themeContextTypes";
import ThemeProviderContext from "./ThemeContext";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  const [isDark, setIsDark] = useState<boolean>(false);

  function handleSetTheme(): void {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    if (!("color-theme" in localStorage)) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("dark");

        localStorage.setItem("color-theme", "dark");
        document.documentElement.attributes.getNamedItem(
          "data-theme"
        )!.textContent = "dark";
        setIsDark(true);
      } else {
        console.log("light");

        localStorage.setItem("color-theme", "light");
        document.documentElement.attributes.getNamedItem(
          "data-theme"
        )!.textContent = "light";
        setIsDark(false);
      }
    }
  }, []);
  useEffect(() => {
    if ("color-theme" in localStorage) {
      document.documentElement.attributes.getNamedItem(
        "data-theme"
      )!.textContent = localStorage.getItem("color-theme");
      setIsDark(localStorage.getItem("color-theme") === "dark" ? true : false);
    }
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, handleSetTheme, isDark }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
