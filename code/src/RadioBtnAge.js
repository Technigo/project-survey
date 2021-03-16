import React from 'react'

const group = ["18-25", "26-35", "35+"];

const RadioBtnAge = (props) => {
    return (
        <>
        <div className='age-group'>
            <h1>What is your age?</h1>
            {group.map(group => (
                <label>
                    <input 
                        type="radio" 
                        value={group} 
                        checked={props.ageGroup === group}
                        required
                    />
                    {group}
                </label>
            ))}
        </div>
        </>
    )
}

export default RadioBtnAge
