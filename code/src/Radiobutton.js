import React from 'react'

const group = ["0-18", "19-30", "30+"];

export const Radiobutton = (props) => {
    const { ageGroup, setAgeGroup } = props;

    return (
    
           group.map(group => (
               <label key={group}>
                   <input 
                   type="radio"
                   value={group}
                   onChange={event => setAgeGroup(event.target.value)}
                   checked={ageGroup === group}
                   required
                   />
                   {group}
               </label>
           ))
    )
}
               
        