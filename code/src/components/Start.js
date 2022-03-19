import React from 'react';


const StartPage = ( {onStepChange} ) => {
    return(
           <div className="welcome">
            <h1 className="startText">CRAVING SOME MACARONS?!</h1>
               <p className="intro-text">Order your personal macaron box below! 🎁  🎁 </p>
               
               <button className="btn" onClick={onStepChange}>OK, LET'S GO!!! </button>
      
        
          </div>
        );
        }


export default StartPage;