import React from 'react';

const group = ["0-18", "19-30", "30+"];

export const Radiobutton = ({ ageGroup, setAgeGroup }) => {
    
    return (
    <>
        <div className="age-group">
        <h1 className="typewriter">What's your age?</h1>
          {group.map(group => (
               <label 
               className="radiobuttoncontainer"
               key={group}>
                   <input 
                   type="radio"
                   value={group}
                   onChange={event => setAgeGroup(event.target.value)}
                   checked={ageGroup === group}
                   required
                   />
                   {group}
                   <span className="custom-radio" tabIndex="0"></span>
               </label>
           ))}
        </div>
    </>
    );
};
               
        