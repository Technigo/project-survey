import React from "react";

export const NameQuestion = ({ name , setName }) => {
    return (
        
        <label>
           What name would you give your cat? 
           <input
           type="text"
           value={name}
           onChange={event => setName(event.target.value)}
            required
            />
         </label> 
    )
}