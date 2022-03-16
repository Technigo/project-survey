import React from 'react'


const FirstQuestion = ({ nameInput, onNameInputChange, setNameInput }) => {


    return (
        
        <div>
            <label htmlFor="name">What's your name?</label>

            <div>
                    <input
                    className="question"
                    id="name" 
                    type="text" 
                    placeholder="Put it right here" 
                    value={nameInput}
                    onChange={onNameInputChange} 
                    required />

                <button className="btn" type="submit" onClick={setNameInput}>Next question!</button>
            </div>

       </div>
    )

}

export default FirstQuestion