import React from 'react';

const StartScreen = ({ onStepChange}) => {

	return (
		<section className="start-screen-container">
            <div className="container">
                <div className="main-heading">
                    <h1>SQUID GAME</h1>
                </div>

                <h2>Are you ready to play?</h2>
                <button onClick={onStepChange}>Apply now</button>
            </div>
		</section>
	);
};

export default StartScreen;