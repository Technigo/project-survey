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
            <h2 className='age-header' tabIndex="0">How old are you?</h2>
            Age:
            {ageGroups.map(group => (
            <label 
            className='radio-buttons'
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
        </div>
        
        );
        };
    