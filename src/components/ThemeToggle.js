import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isLightTheme, dark, light } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <button
            style={{
                background: theme.ui,
                color: theme.syntax,
                marginTop: "1.3em",
                padding: '.5em',
                border: 'none',
                borderRadius: '.5em'
            }}
            onClick={toggleTheme}>Przełącz tryb</button>
    );
}

export default ThemeToggle;