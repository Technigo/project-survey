import React from "react";

export const NameQuestion = ({ name , setName }) => {
    return (
        
        <label>
           Question 1
           <input
           type="text"
           value={name}
           onChange={event => setName(event.target.value)}
            required
            />
         </label> 
    )
}