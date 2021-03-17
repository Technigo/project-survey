import React from 'react'

const NameQuestion = (props) => {

  const {name, setName} = props
  const onNameChange =(event) => {
    console.log(`Name: ${event.target.value}`);
    setName(event.target.value)
  };
  return (
    <div className="text-input">
      <label htmlFor="name">My name is:</label>
      <input 
        type="text" 
        id="name" 
        onChange={onNameChange}
        value={name}
      />
    </div>

  )
}

export default NameQuestion;