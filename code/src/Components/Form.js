import React, { useState } from 'react'

import YourName from './YourName'
import BirthMonth from './BirthMonth'
import Button from './Button'
import FirstLetter from './FirstLetter'
import Submit from './Submit'

const Form = () => {

  const [name, setName] = useState("")
  const [birthMonth, setBirthMonth] = useState("")
  const [firstLetter, setFirstLetter] = useState("")
  const [showSubmit, setShowSubmit] = useState(false);

  const handleNameChange = newName => {
    setName(newName);
  }

  const handleMonthChange = newMonth => {
    setBirthMonth(newMonth);
  }

  const handleLetterChange = newLetter => {
    setFirstLetter(newLetter);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setShowSubmit(true);
  };

  return (

    <>
      <div className="survey-section">


        {!showSubmit && (
          <form onSubmit={handleSubmit}>

            <YourName
              yourName={name}
              onNameChange={handleNameChange}
            />

            <BirthMonth
              yourMonth={birthMonth}
              onMonthChange={handleMonthChange}
            />


            <FirstLetter
              yourLetter={firstLetter}
              onLetterChange={handleLetterChange}
            />

            <Button />
          </form>

)}

    </div>

      {showSubmit && (
        <Submit
          yourName={name}
          yourMonth={birthMonth}
          yourLetter={firstLetter}
        />
      )}
    </>
  )
}


export default Form
