import React from "react";

export const FourthQuestion=({emailInput,onEmailInputChange,onStepChange})=>{
    
    return( 
        
      <form onSubmit={onStepChange}>
        <label className="email-input" htmlFor="emailInput">And one last thing- your email!</label>
          <input
            id="emailInput"
            type="email"
            placeholder="@youremail"
            value={emailInput}
            onChange={onEmailInputChange}
            required />  

            <button className="btn" type="submit"><span>See your answers!</span></button>
      </form>
    )
}