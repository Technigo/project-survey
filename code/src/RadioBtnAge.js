import React from 'react'

const group = ["18-25", "26-35", "35+"];

const RadioBtnAge = (props) => {
    return (
        <>
        <div className='age-group'>
            <h1 className='radio-heading'>What is your age?</h1>
            {group.map(group => (
                <label
                key={group}
                label='age'
                className='radio-container'
                >
                    <input 
                        className='radio-btn'
                        type="radio" 
                        value={group} 
                        checked={props.ageGroup === group}
                        onChange={event => props.setAgeGroup(event.target.value)}
                    />
                    <span class="checkmark"></span>
                    {group}
                </label>
            ))}
        </div>
        </>
    )
}

export default RadioBtnAge
