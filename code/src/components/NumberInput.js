import React, { useState } from "react"

import Character from "./Character"

const NumberInput = (props) => {
    const [number, setNumber] = useState("")

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

    Character[props.data.field] = number

    return (
        <label>{props.data.label}
            <input
                type="number"
                min="10"
                max="100"
                onChange={handleChange}
                value={number}
            />
        </label>
    )
}

export default NumberInput