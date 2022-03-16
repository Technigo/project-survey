import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'


const Form = () => {


    // Declaring the variables here
    const [nameInput, setNameInput] = useState('')


    const onNameInputChange = (event) => {
       setNameInput(event.target.value)
   }

   // Prevents default
   const handleSubmit = (event) => {event.preventDefault()
}


return (

<form onSubmit={handleSubmit}>
   <div className="form-wrapper">
        <div className="header-title">
            <h1 className="hello">Hey you! </h1> 
        </div>


        <FirstQuestion 
        nameInput={nameInput}
        onNameInputChange={onNameInputChange}
        />
    </div>
    </form>
)}

export default Form