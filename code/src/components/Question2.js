import React, { useState } from 'react'

const Question2 = () => {

    const ageGroups = [
        '18-25',
        '26-40',
        '41-55',
        '56+',
    ];

    const [ageGroup, setAgeGroup] = useState();
    
    return (
        <div>
            <p className="question">
                How old are you?
            </p>
                {ageGroups.map((group) => (
                    <label key={group}>
                    <input 
                        type='radio'
                        value={group}
                        onChange={(event) => setAgeGroup(event.target.value)}
                        checked={ageGroup === group}
                    />
                    {group}
                </label>
                ))}
        </div>
    );
  };
  
  export default Question2;