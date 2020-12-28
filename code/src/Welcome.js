import React from 'react'

export const Welcome= ({setPageState, BottleImage}) => {
    return (
        <section>
            <div className="welcome-container">
                <h2 tabIndex="0">Craft Beer Co. survey</h2>
                <p tabIndex="0">Fill out the survey to help us improve our products!</p>
                <div>
                    <button type="button" className="button yes-button" aria-label="Press enter to start the survey" onClick={event => setPageState(false)}>START SURVEY</button>
                </div>
            </div>
        </section>
    );
};
