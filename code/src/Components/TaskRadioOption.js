import React from 'react'

// Question 3
export const TaskRadioOption = ({ completedTaskName, setCompletedTask }) => {
    const onCompletedTaskChanged = (event) => {
        setCompletedTask(event.target.value)
    }

    return (
        <>
            <label htmlFor={completedTaskName}>{completedTaskName}</label>
            <input 
            name='completedTask'
            id={completedTaskName}
            className="radio-dot"
            type='radio'
            value={completedTaskName}
            onChange={
                onCompletedTaskChanged
            }
            />               
        </>
    )
}

export default TaskRadioOption