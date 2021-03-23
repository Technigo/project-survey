import React from 'react'

export const TaskRadioOption = ({ completedTaskName, setCompletedTask }) => {
    const onCompletedTaskChanged = (event) => {
        console.log(`Completed the task: ${event.target.value}`)
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