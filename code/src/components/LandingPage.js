import React from "react";

export const LandingPage = ({NextQuestion})  => {
 

    return(
    
        <div className="container" aria-label="Welcome text" >
            
            <h1>Welcome to IceCream Land!</h1> 
            <p>Here you can place your order for pick up at the store or home delivery. </p> 
            <button onClick={NextQuestion} key="landingpage.Id" className="button">Let´s order </button>
        </div>
   
    )
   
}