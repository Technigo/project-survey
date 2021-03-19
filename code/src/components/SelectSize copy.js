import React, {useState} from 'react'

const SelectSize = () => {
    const [Size, setSize] = useState("");

    return (
        <div className="select-container">
          <label className="select-section">
      <p id="size">Size: {e.target.value}</p>

      <select 
        onChange={event => setSize(event.target.value)} //Skriv istället onChange={setSize}
        value={e.target.value}
        name="Suit Size"
      >
        <option disabled value="">Select Size:</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
        </label>
        </div>
    )
}

export default SelectSize