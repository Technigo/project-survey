import React, { useState } from 'react'

import Step1Player from './Step1Player'

import orange from 'orange.png'



const Form = () => {

   const [nameInput, setNameInput] = useState('')
   const onNameInputChange = (event) => {
       setNameInput(event.target.value)
   }


return (

   <div className="form-wrapper">
        <div className="header-title">
            <h1 className="hello-gorgeous">Hello gorgeous! </h1> 
            <img 
            src={orange}
            alt="picture of an orange"
            className="orange" />
        </div>

        <p>Please have a seat.</p>

        <Step1Player 
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        />
    </div>
)}

export default Form