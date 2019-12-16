import React from 'react'

export const WantThemes = (props) => {
    return (
        <div className="wantThemes">
            <h3>Do you want to have theme afterworks?</h3>
            {props.themeAwChoices.map((choice) => (
                <label key={choice}>
                    <input
                        checked={props.themeAw === choice}
                        onChange={() => props.setThemeAw(choice)}
                        type="radio"
                        value={choice} />
                    {choice}
                    <br />
                </label>))}
        </div>)
}