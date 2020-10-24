import React from 'react';

const ThemeField = ({theme, setTheme}) => {
    
    return (
        <select
            id="theme"
            tabIndex="0"
            onChange={event => setTheme(event.target.value)}
            value={theme}
            aria-label
            
        >
            <option value="">Which theme would you prefer?</option>
            <option value="femme-fatale">Femme Fatale</option>
            <option value="white-party">White Party</option>
            <option value="ninetees">Ninetees</option>
        </select>
        )
    }

export default ThemeField;