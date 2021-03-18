import React from "react"

const RangeInput = (props) => {
    const { value, setValue } = props

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className="stat">
            <label htmlFor="range">
                {props.data.label}
            </label>
            <input
                id="range"
                type="range"
                className={props.data.className}
                min="0"
                max="10"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeInput