import React from "react"

const NumberInput = (props) => {
    const { number, setNumber } = props

    const handleChange = (event) => {
        setNumber(event.target.value)
    }

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