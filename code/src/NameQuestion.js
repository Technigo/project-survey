import React from "react";

export const NameQuestion = ({ name , setName }) => {
    return (
        <div className ="name-question">
            <label tabIndex ="0">
             What name would you give your cat? 
            <input
            type="text"
            value={name}
            onChange = {(event) => setName(event.target.value)}
            required
         
            />
            </label> 
        </div>
    )
}