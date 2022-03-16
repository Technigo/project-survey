import React, { useState } from 'react'


const FirstQuestion = ({ nameInput, onNameInputChange, setNameInput }) => {

    const [step, setStep] = useState(0)

    const onStepBack = () => {
        setStep(step - 1)
    }

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

                <button className="btn" type="submit" onClick={onStepBack}>↩️ Go back</button>
            </div>

       </div>
    )

}

export default FirstQuestion