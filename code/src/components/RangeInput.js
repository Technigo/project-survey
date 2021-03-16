import React, { useState } from "react"

import Character from "./Character"

const RangeInput = (props) => {
    const [value, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    Character[props.rangeName] = value

    return (
        <label>
            <input
                type="range"
                name={props.rangeName}
                min="0"
                max="10"
                onChange={handleChange}
            />
            {props.rangeName}
        </label>
    )
}

export default RangeInput