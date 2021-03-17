import React, {useState} from 'react'

const SelectSize = () => {
    const [Size, setSize] = useState("");

    return (
        <label className="select-section">
      <p>Size: {Size}</p>

      <select 
        onChange={event => setSize(event.target.value)} //Skriv istället onChange={setSize}
        value={Size}
        name="Suit Size"
      >
        <option disabled value="">Select Size:</option>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </select>
        </label>
    )
}

export default SelectSize