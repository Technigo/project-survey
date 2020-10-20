import React from 'react'
import { useState } from 'react'

const ageGroups = [
    '20-30', 
    '31-40', 
    '41-50', 
    '51 +',
]

export const FirstQuestion = () => {
    const [ageGroup, setAgeGroup] = useState('');

    return (
        <form>
            <h2>How old are you?</h2>
            Age:
            {ageGroups.map(group => (
            <label key={group}>
                <input
                    type='radio'
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                />
                {group}
            </label>
            ))};
        </form>
        );
        };