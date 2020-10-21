import React from 'react'

const ageGroups = [
    '20-30', 
    '31-40', 
    '41-50', 
    '51+',
]

export const FirstQuestion = ({ageGroup, setAgeGroup}) => {
    console.log();

    return (
        <div className='first-question'>
        <form>
            <h2>How old are you?</h2>
            Age:
            {ageGroups.map(group => (
            <label 
            key={group}>
                <input
                    type='radio'
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                />
                {group}
            </label>
            ))}
        </form>
        </div>
        
        );
        };
    