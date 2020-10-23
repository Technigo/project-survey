import React from 'react'
import  BottleImages  from './Images/mix-bottles.png'

export const DontTakeSurvey= () => {
return (
    <section>
        <div className="create-profile-container">
            <img src={BottleImages} alt="bottle images" className="bottle-image"/>
            <div className="create-profile-text">
                <h2>No probs!</h2>
                <p>You can always come back another time to fill in our survey!</p>
            </div>
            
        </div>
    </section>    
    );
};