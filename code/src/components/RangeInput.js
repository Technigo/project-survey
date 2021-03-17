import React from "react"

import Character from "./Character"

const RangeInput = (props) => {
    const { value, setValue } = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    Character[props.rangeName] = value

    return (
        <label>
            <input
                type="range"
                className={props.className}
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