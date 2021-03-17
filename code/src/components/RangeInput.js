import React from "react"

const RangeInput = (props) => {
    const { value, setValue } = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <label>
            {props.data.label}
            <input
                type="range"
                className={props.data.className}
                min="0"
                max="10"
                onChange={handleChange}
            />
        </label>
    )
}

export default RangeInput