import React, { useState } from 'react'

import Step1Player from './Step1Player'



const Form = () => {

   const [nameInput, setNameInput] = useState('')
   const onNameInputChange = (event) => {
       setNameInput(event.target.value)
   }


return (

   <div className="form-wrapper">
        <div>
            <h1>Hello gorgeous!</h1>
            <p>Please have a seat.</p>
        </div>


        <Step1Player 
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        />
    </div>
)}
export default Form