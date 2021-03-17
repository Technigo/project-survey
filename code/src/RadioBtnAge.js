import React from 'react'

const ageGroup = ["18-25", "26-35", "35+"];

const RadioBtnAge = ( {onAgeChange} ) => {
    return (
        <>
        <div className='age-group'>
            <h1 className='radio-heading'>What is your age?</h1>
            {ageGroup.map(group => (
                <label
                key={group}
                label='age'
                className='radio-container'
                >
                    <input 
                        name='age'
                        className='radio-btn'
                        type="radio" 
                        value={group} 
                        onChange={onAgeChange}
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
