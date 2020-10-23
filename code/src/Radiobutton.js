import React from 'react'

const group = ["0-18", "19-30", "30+"];

export const Radiobutton = ({ ageGroup, setAgeGroup }) => {
    
    return (
    <>
        <div className="age-group">
            <p>Select your age: </p>
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
                   <span className="custom-radio"></span>
               </label>
           ))}
    </div>
    </>
    )
}
               
        