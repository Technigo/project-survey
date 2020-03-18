import React from 'react'

const colorGroups = ["Blue", "Yellow", "Red", "Green", "Gray"];

export const ColorForm = ({title, infotext, colorGroup, setColorGroup}) => {
    
    return (

     <article>
         <h1>{title}</h1>
         <p>{infotext}</p>
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


