import React, { useState } from 'react';

const Welcome = () => {
    const[name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);

    }

    return (
        <>
    <div className="welcome-container">
    <div className="header">
        <h1>Dinner plans generator</h1>
        <img className="welcome-image" src="assets/question1.jpg" alt="Dinner table" ></img>
        <h2>Hungry but out of ideas? Let's see what you can have for dinner today!</h2>
    </div>
    
        <div>
            <label htmlFor="name">What's your name, hungry friend?</label>
            <input
             id="name" 
             type="text" 
             value={name}
             onChange={onNameChange}
            />
        </div>
    </div>
        </>
    );
};

export default Welcome;