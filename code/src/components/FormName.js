import React from 'react'


const FormName = () => {

  return (

    <form>
      <label for='fName'>Please enter your first name:</label>
      <input type='text' id='fName' name='fName'></input>
      <label for='lastName'>Please enter your last name:</label>
      <input type='text' id='lastName' name='lastName'></input>

    </form>
  )
}
 
export default FormName