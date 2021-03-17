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
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
        </label>
    )
}

export default SelectSize