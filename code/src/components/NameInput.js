import React from 'react'

const NameInput = (props) => {

  const onNameChange = (event) => {
    props.setName(event.target.value) 
  }

  return (
    <>
      <label className="form-label" htmlFor="name">Name</label>
      <input className="form-text-input" name="name" type="text" required
      onChange={onNameChange}
      value={props.name}
      
      /> 
    </>
  )
}

export default NameInput