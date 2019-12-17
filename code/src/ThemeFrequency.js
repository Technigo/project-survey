import React from 'react'

export const ThemeFrequency = (props) => {
    return (
        <div className="themeFrequency">
            <h3>How often do you want to have a theme afterwork?</h3>
            <select
                onChange={event => props.setOftenTheme(event.target.value)}
                value={props.oftenTheme}
            >
                {props.themeFrequencies.map((frequency) => (
                    <option value={frequency}>{frequency}</option>
                ))}
            </select>
        </div>)
}