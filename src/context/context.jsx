import { createContext, useState, useContext } from 'react';

// contexto
export const ThemeContext = createContext();

// uso contexto
export const useTheme = () => useContext(ThemeContext);

// Proveedor
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado inicial

  //modo oscuro y claro
  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};