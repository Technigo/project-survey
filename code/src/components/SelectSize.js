import React, {useState} from 'react'


const SelectSize = ({sizeSelected, IselectSize}) => {
    //const [Size, setSize] = useState("");

    return (
      <div className="select-container">
        <label className="select-section">
          <p id="size">Size: {sizeSelected} </p> 

          <select 
            onChange={e => IselectSize(e)} //Skriv istället onChange={setSize}
            value={sizeSelected}
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