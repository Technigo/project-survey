import React from "react";

export const LandingPage = ({NextQuestion})  => {
 

    return(
        
        <div className="intro">
            <p>Hi, Thanks for applying for this page. We would love to know your thougths about this. 
                Are you ready to go? </p> 
            <button onClick={NextQuestion} key="landingpage.Id" className="button">Lets go </button>
        </div>
   
    )
   
}