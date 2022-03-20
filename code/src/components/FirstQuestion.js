import React from "react";


export const FirstQuestion=({nameInput,onNameInputChange,emailInput,onEmailInputChange,onStepChange})=>{
    
    return( 
        <>
        <div>
          <h1>Welcome!</h1>
          <h3>Sign up for cultural news in your city!
          </h3>
        </div>
          <form onSubmit={onStepChange}>
            <label className="name-input" htmlFor="nameInput">Tell us your name!</label>
            <input
              id="nameInput"
              type="text"
              placeholder="Your name here"
              value={nameInput}
              onChange={onNameInputChange}
              required />
            <button  className="btn" type="submit"><span>Next!</span></button>
          </form>
        </>
  )
}