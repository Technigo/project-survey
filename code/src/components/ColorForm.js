import React from 'react'
const colorGroups = ["Blue", "Yellow", "Red", "Green", "Gray"];

export const ColorForm = ({name, colorGroup, setColorGroup}) => {
    
    return (

     <article>
         <h1>{name}</h1>
        {colorGroups.map(group => (
            <label key={group}>{group}
              <input
              type="checkbox"
              value={group}
              onChange={event => setColorGroup(event.target.value)}
              checked={colorGroup === group} 
              />
            </label>
        ))}
    </article>

    );
}


