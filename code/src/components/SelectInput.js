import React, { useState } from "react"

import Character from "./Character"


const SelectInput = (props) => {
    const [choice, setChoice] = useState("")

    const handleChange = (event) => {
        setChoice(event.target.value)
    }

    Character[props.field] = choice

    return (
        <select
            onChange={handleChange}
            value={choice}
            className={props.className}
        >
            {props.choices.map(item =>
                <option
                    key={item}
                    value={item}
                >{item}</option>
            )}
        </select>
    )
}

export default SelectInput