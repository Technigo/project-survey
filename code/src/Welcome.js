import React from 'react'
import  BottleImages  from './Images/mix-bottles-2.png'

export const Welcome= ({setPageState}) => {
    return (
        <section>
            <div className="create-profile-container">
                <div className="create-profile-text">
                    <h2>Craft Beer Co survey</h2>
                    <p>Fill out the survey to help us improve our products!</p>
                    <div className="button-container">
                        <button type="button" className="profile-button yes-button" onClick={event => setPageState(false)}>Yes please!</button>
                    </div>
                </div>
                <img src={BottleImages} alt="bottle images" className="bottle-image"/>

            </div>
        </section>
    );
};
