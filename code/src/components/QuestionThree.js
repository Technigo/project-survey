import React from 'react'



const ageGroups = ["5-15", "16-25", "25-35", "36-45", "46-55", "56+"]

const Age = ({Age, onAgeChange}) => {
    return (
        <form>
            <h2>How old are you?</h2>
            {ageGroups.map((group) => (
                <label key={group} >
                    <input
                    type="radio"
                    value={group}
                    onChange={(event)=> onAgeChange(event.target.value)}
                    checked={Age === group}
                    />
                    {group}
                </label>
                ))}
            </form>

    )
}

export default Age