import React, { useState } from 'react'

import Header from './components/Header.js'
import QuestionContainer from 'components/Questions.js'
import Summary from './components/Summary.js'


export const App = () => {
  // const [counter, setCounter] = useState(0);
  const [inputvalue, setInputValue] = useState('');
  const [radiovalue, setRadioValue] = useState();
  const [dropdownvalue, setAlternative] = useState('hej');


   const handleInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputvalue); 
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
    console.log(radiovalue)
  }


  const handleDropdownChange = (event) => {
    setAlternative(event.target.value);
    console.log(dropdownvalue);
  }


  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <QuestionContainer 
          handleInputChange={handleInputChange} 
          handleRadioChange={handleRadioChange}
          handleDropdownChange={handleDropdownChange}
          radiovalue={radiovalue}
          inputvalue={inputvalue}
          dropdownvalue={dropdownvalue}
        />
      </div>
      <Summary inputvalue={inputvalue} radioValue={radiovalue} dropdownValue={dropdownvalue} />
    </>
  )
}
