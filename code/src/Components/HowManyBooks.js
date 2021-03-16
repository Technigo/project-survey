import React, {useState} from 'react';


/*DROPDOWN MENU*/

const HowManyBooks = ({text}) => {
  const [number, setNumber] = useState("");

  const onNumberChange = (event) => {
    setNumber(event.target.value)
  }

  return(
    <div className = "number-of-books-container">

      <label><h2>{text}</h2>
      <select
        onChange={onNumberChange}
        value={number}
      >
        <option value="">Select number:</option>
        <option value="0-5">0-5</option>
        <option value="6-10">6-10</option>
        <option value="11-20">11-20</option>
        <option value="21+">21+</option>
      </select>
      </label>
      <button className="start-button"><a href='#genre'>Next</a></button>
    </div>

  )

};

export default HowManyBooks;