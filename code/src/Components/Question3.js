import React, { useState } from 'react'

const Question3 = () => {
    const [completedTask, setCompletedTask] = useState()

    return (
        <label className="question">
            3. Were you able to complete your task that day?  
            <div className="radio-buttons">
                <div className="buttons">
                    <input className="radio-dot"
                        type='radio'
                        value='Yes'
                        onChange={event => setCompletedTask(event.target.value)}
                        checked={completedTask === 'Yes'}
                    />
                    Yes
                </div>
                <div className="buttons">
                    <input className="radio-dot"
                        type='radio'
                        value='No'
                        onChange={event => setCompletedTask(event.target.value)}
                        checked={completedTask === 'No'}
                    />
                    No
                </div>
            </div>
        </label>
    )  
}

export default Question3