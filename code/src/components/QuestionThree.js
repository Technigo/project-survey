import React from 'react'



const ageGroups = ["5-15", "16-25", "25-35", "36-45", "46-55", "56+"]

const Age = ({age, onAgeChange, onNextChange}) => {
    return (
        <div>
            <h2>How old are you?</h2>
            {ageGroups.map((group) => (
                 <label key={group} >
                     <input
                     type="radio"
                     value={group}
                     onChange={onAgeChange}
                     checked={age === group}
                     />
                     {group}
                 </label>
                ))}
                    <button onClick={onNextChange}>Finally done!</button>
            </div>
    )
}

export default Age