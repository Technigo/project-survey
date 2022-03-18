import React from "react";


export const FirstQuestion=({nameInput,onNameInputChange,onStepChange})=>{
    
    return( 
    
    <form onSubmit={onStepChange}>
        <label className="name-input" htmlFor="nameInput">Tell us your name!</label>
        <input 
            id="nameInput"
            type="text"
            placeholder="Your name here"
            value={nameInput}
            onChange={onNameInputChange}
            required
        />
        <button className="btn" type="submit"><span>Next!</span></button>
    </form>

    )
}