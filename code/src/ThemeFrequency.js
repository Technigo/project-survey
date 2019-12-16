import React from 'react'

export const ThemeFrequency = (props) => {
    return (
        <div className="themeFrequency">
            <h3>How often do you want to have the theme afterworks?</h3>
            {props.themeFrequencies.map((frequency) => (
                <label key={frequency}>
                    <input
                        checked={props.oftenTheme === frequency}
                        onChange={() => props.setOftenTheme(frequency)}
                        type="radio"
                        value={frequency} />
                    {frequency}
                    <br />
                </label>))}
        </div>)
}