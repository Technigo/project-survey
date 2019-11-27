import React, { useState } from 'react';
import 'Components css/RadioButton.css'


const ageGroups = ["0-18", "19-30", "31+"];

export const RadioButton = () => {
    const [ageGroup, setAgeGroup] = useState();

    return (
        <form>
            Age Group:
      {ageGroups.map(group => (
                <label key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={event => setAgeGroup(event.target.value)}
                        checked={ageGroup === { group }}
                    />
                    {group}
                </label>
            ))}
        </form>
    );
}; 