import React, {useState} from 'react'

const WorkArea = ({ workArea, setWorkArea}) => {

    const onWorkAreaChange = (event) => {
        setWorkArea(event.target.value)
    }

    return (

        <div>
            <label>
                <h2 className='question-title'>Which areas are you interested to work in?</h2>
                <select
                    name='dropdown-question'
                    onChange={onWorkAreaChange}
                    value={workArea}
                >
                    <option value=''>Select work area:</option>
                    <option value='frontend'>Frontend Development</option>
                    <option value='backend'>Backend Development</option>
                    <option value='fullstack'>Fullstack Development</option>
                </select>
            </label>

            <button className='ok-button'></button>

        </div>

    )
} 

export default WorkArea;