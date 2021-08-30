import React from 'react'

import NextButton from 'components/NextButton'

const NameQuestion = ({ setName, name }) => {

  const onNameChange = (e) => {
   setName(e.target.value)
  }

  return (
    <div className="question-container">
      <h1 className="question-header">What is your name?</h1>
      <div className="name-question">
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            value={name}
            onChange={onNameChange}
          />
        </label>
        <NextButton />
      </div> 
    </div>
  )
}

export default NameQuestion