import React, { useState } from 'react'
import Intro from './Intro'
import FirstQuestion from './FirstQuestion'


const Form = () => {


// Declaring all the pretty variables here
const [nameInput, setNameInput] = useState('')


const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}

return (
  
<form className="form-wrapper">
    
<Intro />

<FirstQuestion 
    nameInput={nameInput}
    onNameInputChange={onNameInputChange}
/>

</form>

)}

export default Form