import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import "./Components/radio.css";

const ageGroups = ["0-18", "19-30", "30+"];

export const Radio = () => {
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
                    checked={ageGroup === group}
                />
            {group}
            </label>
        ))} 
    </form>
    );
};