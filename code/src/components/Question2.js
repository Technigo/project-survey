import React, { useState } from 'react'


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
    <form>
      <select
        onChange={(event) => setDistance(event.target.value)}
        value={distance}
      >
        <option value="">{props.question}</option>
        <option value="0-10 km">0-10 km</option>
        <option value="20-50 km">20-50 km</option>
        <option value="50+ km">50+ km</option>

      </select>
    </form>



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