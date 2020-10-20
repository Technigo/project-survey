import React from 'react'


const dropDownOptionsArr = ["0-10 km", "20-50 km", "50+ km"];

// a drop-down menu
export const Question2 = (props) => {
  //function that displays the menu options
  const handleDropDownMenu = () => {
    return true;
  }
  return (
    <div className="question-container">
      {/* add: onClick handler event drop down menu is shown - MAKE THIS WORK! */}
      <button onClick={() => handleDropDownMenu()}>{props.question}</button>
      {handleDropDownMenu
        ? <ul>
          {/* loop over an array with options and display them as a list */}
          {dropDownOptionsArr.map(option => <li>{option}</li>)}
        </ul>
        : "Oops, sth went wrong!"
      }
    </div >
  )
}

export default Question2;