import React from 'react'

import NextButton from 'components/NextButton'


const NameQuestion = (props) => {

  const onNameChange = (e) => {
   props.setName(e.target.value)
  }

  return (
    <div className="question-container">
      <h1 className="question-header">What is your name?</h1>
      <div className="name-question">
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            value={props.name}
            onChange={onNameChange}
            required
          />
        </label>
        <NextButton />
      </div> 
    </div>
  )
}

export default NameQuestion