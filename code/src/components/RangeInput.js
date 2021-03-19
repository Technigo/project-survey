import React from "react"

const RangeInput = ({ value, setValue, data }) => {

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className="stat">
            <label htmlFor="range">
                {data.label}
            </label>
            <input
                id="range"
                type="range"
                className={data.className}
                min="0"
                max="10"
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default RangeInput