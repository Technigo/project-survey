import React from 'react';

const Welcome = () => {

    return (
        
    <div className="welcome-wrapper">
        <h1 tabIndex='0' className='welcome-text'>Dinner plans generator</h1>
        <img className="welcome-image" src="assets/question1.jpg" alt="Dinner table" ></img>
        <p tabIndex='0' className='welcome-paragraph'>Hungry but out of ideas? Let's see what you can have for dinner today!</p>
    </div>
    
    );
};

export default Welcome;