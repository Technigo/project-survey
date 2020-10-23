import React from 'react'
import  BottleImages  from './Images/mix-bottles.png'

export const Welcome= ({setPageState}) => {
    return (
        <section>
            <div className="create-profile-container">
                <img src={BottleImages} alt="bottle images" className="bottle-image"/>
                <div className="create-profile-text">
                    <h2>Craft Beer Co survey</h2>
                    <p>Fill out the survey to help us improve our products!</p>
                    <div className="button-container">
                        <button type="button" className="profile-button yes-button" onClick={event => setPageState(1)}>Yes please!</button>
                        <button type="button" className="profile-button no-button" onClick={event => setPageState(2)}>Not this time</button>                
                    </div>
                </div>
            </div>
        </section>
    );
};
