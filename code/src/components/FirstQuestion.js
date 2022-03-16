import React, { useState } from 'react'


const FirstQuestion = ({ 
    nameInput, 
    onNameInputChange, 
    setNameInput, 
    surnameInput,
    onSurnameInputChange

}) => {

    return (
        
        <div>
            <label htmlFor="name">What's your name?</label>

            <div>
                    <input
                    className="question"
                    id="name" 
                    type="text" 
                    placeholder="First name" 
                    value={nameInput}
                    onChange={onNameInputChange}
                    />

                    <input
                    className="question"
                    id="name" 
                    type="text" 
                    placeholder="Surname" 
                    value={surnameInput}
                    onChange={onSurnameInputChange} 
                    />      

                <div>
                <button className="btn" type="submit" onClick={setNameInput}>Next question!</button>
                </div>
            </div>

       </div>
    )

}

export default FirstQuestion