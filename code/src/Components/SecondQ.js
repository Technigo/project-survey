import React from 'react'

const SecondQuestion = ({ ageGroup,setAgeGroup, ageGroups }) => {
    return (
        <div>
            <h3>How old are you?</h3>
            {ageGroups.map(ageGroup => (
                <label key={ageGroup}>
                    <input type="radio" 
                        name="age" 
                        onChange={event =>setAgeGroup(event.target.value)} 
                        checked={ageGroups === ageGroup} 
                        value={ageGroup}
                    />
                    {ageGroup}
                </label>
            ))}
            </div>
        
    )

}

export default SecondQuestion