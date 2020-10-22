import React, { useState } from 'react'

import "components/question2.css"

const dropDownOptionsArray = ["0-10 km", "20-50 km", "50+ km"];

// a drop-down menu
const Question2 = (props) => {
  const [distance, setDistance] = useState("");
  //state hook [variableThatHoldsTheValue, functionThatSetsTheValueOfTheVariable/theAccessor] = useState(defaultValue);
  // const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  // //assign a value "true" to variable isDropDownOpen
  // const handleDropDownMenu = () => {
  //   // when the new value is set, React rerenders - aftrerwards the value is updated
  //   return setIsDropDownOpen(true);
  // };

  return (
    <section className="section-container">
      <form className="form-container">
        <label htmlFor="drop-down">{props.question}</label>
        <select
          onChange={(event) => setDistance(event.target.value)}
          value={distance}
          id="drop-down"
          name="distance"
        >
          {/* If you want to mark an <option> as selected, reference the value of that option
           in the value of its <select> instead. 
           Check out “The select Tag” for detailed instructions. */}
          {dropDownOptionsArray.map((option) => {
            // return <option value={distance}>{option}</option>
            //not sure the key is correct, though
            return <option key={option} value={option}>{option}</option>
          })}
        </select>
      </form>
    </section>



    // <section className="section-container">
    //   {/* add: onClick handler event drop down menu is shown - MAKE THIS WORK! conditional rendering */}
    //   <button type="button" onClick={() => handleDropDownMenu()}>{props.question}</button>
    //   {isDropDownOpen
    //     ? <ul>
    //       {/* loop over an array with options and display them as a list */}
    //       {dropDownOptionsArray.map(option => <li>{option}</li>)}
    //     </ul>
    //     : null
    //   }
    // </section>
  )
}

export default Question2;