import React from 'react'

import NextButton from 'components/NextButton'


const NameQuestion = (props) => {

  const onName = (e) => {
   props.setName(e.target.value)
  }

  return (
    <div className="question-container">
      <h1>What is your name?</h1> 
      <label htmlFor="name">
        <input
        name="name"
        type="text"
        value={props.name}
        onChange={onName}
        required
        />
      </label>
      <NextButton />
    </div>
  )
}

export default NameQuestion