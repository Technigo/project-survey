import React from 'react'

const group = ["18-25", "26-35", "35+"];

const RadioBtnAge = (props) => {
    return (
        <>
        <div className='age-group'>
            <h1>What is your age?</h1>
            {group.map(group => (
                <label
                key={group}
                label='age'
                >
                    <input 
                        type="radio" 
                        value={group} 
                        checked={props.ageGroup === group}
                        required
                        onChange={event => props.setAgeGroup(event.target.value)}
                    />
                    {group}
                </label>
            ))}
        </div>
        </>
    )
}

export default RadioBtnAge
