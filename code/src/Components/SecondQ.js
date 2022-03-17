import React from 'react'

const SecondQuestion = ({  setAgeGroup, ageGroups, nextSection, backSection }) => {
    
    return (
        <article>
            <h3>How old are you?</h3>
            {ageGroups.map(ageGroup => (
                <label key={ageGroup}>
                    <input type="radio" 
                        name="age" 
                        onChange={event =>setAgeGroup(event.target.value)} 
                        defaultChecked={ageGroups === ageGroup} 
                        value={ageGroup}
                    />
                    {ageGroup}
                </label>
                ))}

                <button className="next-btn"
                onClick= {nextSection}
                >
                Next question</button>

                <button className="back-btn"
                onClick= {backSection}
                >
                Back question</button>
            </article>
        
    )

}

export default SecondQuestion