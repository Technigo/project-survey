import React from 'react'

const SelectSize = () => {
    return (
        <label>
        <p>Size</p>
        <select name="tshirtSize">
            <option value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
        </select>
        </label>
    )
}

export default SelectSize