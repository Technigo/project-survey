import React from 'react';


/*DROPDOWN MENU*/

const HowManyBooks = ({text, number, onNumberChange}) => {


  return(
    <div className = "number-of-books-container">
      <div className="inner-container">
      <label className="label-radio"><h2>{text}</h2>
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
      <div className="button-div">
        <button className="start-button"><a href='#genre'>Next</a></button>
        </div>
      </div>

    </div>

  )

};

export default HowManyBooks;