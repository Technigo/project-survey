import React from 'react';


const StartPage = ( {onStepChange} ) => {
    return(
           <section className="intro-container">
            <h1 className="start-text">CRAVING SOME MACARONS?!</h1>
               <p className="intro-text">Order your personal macaron box below! <span>🎁  🎁 🎁</span> </p>
              <div className="button-container">
               <button className="start-btn" onClick={onStepChange}>OK, let's go!!! </button>
               </div>
               </section>
        );
        }


export default StartPage;