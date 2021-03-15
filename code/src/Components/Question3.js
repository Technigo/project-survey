import React, { useState } from 'react'

const Question3 = () => {
    const [completedTask, setCompletedTask] = useState()

    return (
        <label>
            3. Were you able to complete your task that day?  
            <input
                type='radio'
                value='Yes'
                onChange={event => setCompletedTask(event.target.value)}
                checked={completedTask === 'Yes'}
            />
            Yes
            <input
                type='radio'
                value='No'
                onChange={event => setCompletedTask(event.target.value)}
                checked={completedTask === 'No'}
            />
            No
        </label>
    )  
}

export default Question3