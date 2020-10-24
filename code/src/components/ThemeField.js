import React from 'react';

const ThemeField = ({theme, setTheme}) => {
    
    return (
        <label htmlFor="theme" className="theme-label" tabIndex="0">Which theme would you prefer?
            <select
                id="theme"
                tabIndex="0"
                onChange={event => setTheme(event.target.value)}
                value={theme}
            >
                <option value="">Select..</option>
                <option value="femme-fatale">Femme Fatale</option>
                <option value="white-party">White Party</option>
                <option value="ninetees">Ninetees</option>
            </select>
        </label>
        )
    }

export default ThemeField;