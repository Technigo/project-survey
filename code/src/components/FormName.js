import React, {useState} from 'react'


const FormName = (props) => {

  const {name, setName} = props

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  return (

    <form>
      <label htmlFor='name'>Please enter your first name:</label>
      <input
       type='text' 
       id='name'      
       onChange={ onNameChange }
       value={name}
      />

      {/* <label for='lastName'>Please enter your last name:</label>
      <input type='text' id='lastName' name='lastName'></input> */}

    </form>
  )
}
 
export default FormName


