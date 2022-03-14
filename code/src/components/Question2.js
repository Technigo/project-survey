import React, { useState } from 'react'

const Question2 = () => {

    const ageGroups = [
        '18-25',
        '26-35',
        '36-45',
        '46-55',
        '56 and above'
    ];

    const [ageGroup, setAgeGroup] = useState();
    
    return (
        <div>
            <p className="question">
                How old are you?
            </p>
            <form>
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
            </form>
        </div>
    );
  };
  
  export default Question2;