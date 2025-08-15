import { createContext, useContext, useEffect, useState } from "react";

// Theme context create
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Default theme localStorage se lo, warna 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Jab theme change ho, document root me class lagao
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Save to localStorage
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook
export const useTheme = () => useContext(ThemeContext);
