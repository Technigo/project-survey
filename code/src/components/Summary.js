import React from "react";

export const Summary=({nameInput, interestInput, locationInput, emailInput, restart})=>{
    
  return( 
    <section>
      <h1> Thank you <span className="purpletext">{nameInput}</span>!</h1>
      <h2> We will send updates to 
        <span className="purpletext"> {emailInput}</span> about 
        <span className="purpletext"> {interestInput}
        </span> in <span className="purpletext"> {locationInput}</span>
       </h2>
       <button className="btn" type="submit" onClick={()=>{restart()}}><span>Start again!</span></button>
    </section>
    )
}