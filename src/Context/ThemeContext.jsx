import { createContext, useEffect } from "react";
import { useLocalStorage } from "react-use";
export const ThemeContext = createContext(null);
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme","dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    setTheme(theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}