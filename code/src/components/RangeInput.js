import React from "react"

const RangeInput = (props) => {
    const { value, setValue } = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <label>
            <input
                type="range"
                className={props.className}
                min="0"
                max="10"
                onChange={handleChange}
            />
            {props.rangeName}
        </label>
    )
}

export default RangeInput