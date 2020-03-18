import React from 'react'

export const FunForm = ({title, description, setDescription}) => {

    return (
        <article>
            <label>
            <h1>{title}</h1>

            <textarea className="textarea"
              type="text" 
              placeholder="Write something.."
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </label>
          
       </article> 
 
    );
}
