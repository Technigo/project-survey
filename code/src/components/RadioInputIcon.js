import React, { useState } from "react"

import Character from "./Character"

const RadioInputIcon = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    Character[props.data.field] = choice

    return (
        <div>
            Race:
            {props.data.source.map(item =>
                <label key={item}>
                    <img src={item} className="character-icon" alt="character icon" />
                    <input
                        type="radio"
                        value={item}
                        onChange={handleChange}
                        checked={choice === item}
                    />
                </label>
            )}
        </div>
    )
}

export default RadioInputIcon