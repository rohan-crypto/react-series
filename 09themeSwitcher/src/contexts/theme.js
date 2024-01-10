import { createContext, useContext } from "react";

// we can pass objects and func inside createContext
export const ThemeContext = createContext({

    themeMode: "light",//default value
    darkTheme: () => {},
    lightTheme: () => {},

});

// we are exporting Provider also from same File, good practice
export const ThemeProvider = ThemeContext.Provider;

// function to access ThemeContext props
export default function useTheme(){
    return useContext(ThemeContext);
}