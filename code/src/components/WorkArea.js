import React, {useState} from 'react'

const WorkArea = ({ workArea, setWorkArea}) => {

    const onWorkAreaChange = (event) => {
        setWorkArea(event.target.value)
    }

    return (
        <div className='questionContainer two'>
            <label>
                <h2 className='questionTitle'>Which work area are you interested in?</h2>
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

            <button className='okButton'><a href='#place'>OK</a></button>

        </div>

    )
} 

export default WorkArea;