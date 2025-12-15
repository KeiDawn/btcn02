import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("dark_mode");
      if (stored !== null) return stored === "true";
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;

    html.classList.toggle("dark", dark);

    localStorage.setItem("dark_mode", dark ? "true" : "false");
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
