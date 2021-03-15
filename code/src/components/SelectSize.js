import React, {useState} from 'react'

const SelectSize = () => {
    const [Size, setSize] = useState("");

    return (
        <label>
      <h6>Size: {Size}</h6>

      <select 
        onChange={event => setSize(event.target.value)}
        value={Size}
      >
        <option value="">Select Size:</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
        </label>
    )
}

export default SelectSize