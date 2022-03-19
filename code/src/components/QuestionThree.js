import React from 'react'



const ageGroups = ["5-15", "16-25", "25-35", "36-45", "46-55", "56+"]

const Age = ({age, onAgeChange, onNextChange, onBackChange}) => {
    return (
        <section className="container">
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
                    <button className="btn" onClick={onBackChange}>Back</button>
                    <button onClick={onNextChange} className="btn">Finally done!</button>
        </section>
    )
}

export default Age