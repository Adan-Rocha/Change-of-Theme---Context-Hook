import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider=  ({ children })=> {
  const [theme, setTheme] = useState("light");

  const defaultContext = {
    theme,
    setTheme,
  }

  return (
    <ThemeContext.Provider value={defaultContext}>
      {children}
    </ThemeContext.Provider>
  )
}


const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
