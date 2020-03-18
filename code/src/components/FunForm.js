import React from 'react'

export const FunForm = ({name, setName}) => {

    return (
        <article>
             <label>
         hey
            <input
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          
       </article> 
 
    );
}
