import React from 'react'


const FirstQuestion = ({ nameInput, onNameInputChange, setNameInput }) => {


    return (
        
        <div>
            <label htmlFor="name">What's your name?</label>

            <div>
                    <input
                    id="name" 
                    type="text" 
                    placeholder="Put it right here" 
                    value={nameInput}
                    onChange={onNameInputChange} 
                    required />

                <button type="submit" onClick={setNameInput}>Let's go!</button>
            </div>

       </div>
    )

}

export default FirstQuestion