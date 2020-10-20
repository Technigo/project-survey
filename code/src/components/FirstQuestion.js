import React from 'react'
import { useState } from 'react'

const ageGroups = [
    '20-30', 
    '31-40', 
    '41-50', 
    '51 +']

export const FirstQuestion = () => {
    const [ageGroup, setAgeGroup] = useState('');
    console.log()

    return (
        <form>
            <p>How old are you?</p>
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