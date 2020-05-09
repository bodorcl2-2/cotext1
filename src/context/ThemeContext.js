import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(
        {
            isLightTheme: false,
            light: { syntax: '#555', ui: "#ddd", bg: '#eee' },
            dark: { syntax: '#ddd', ui: "#333", bg: '#555' }
        }
    )
    const toggleTheme = () => {
        setTheme(prevState => {
            return { ...prevState, isLightTheme: !theme.isLightTheme };
        });
    }
    return (
        <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
