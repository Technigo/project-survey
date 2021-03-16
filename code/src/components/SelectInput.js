import React, { useState } from "react"

import Character from "./Character"


const SelectInput = (props) => {
    const { choice, setChoice } = props

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    Character[props.data.field] = choice

    return (
        <select
            onChange={handleChange}
            value={choice}
            className={props.data.className}
        >
            {props.data.choices.map(item =>
                <option
                    key={item}
                // value={item}
                >
                    {item}
                </option>
            )}
        </select>
    )
}

export default SelectInput