import React from 'react';

const Welcome = () => {
    return (
        <>
        <h1>Dinner plans generator</h1>
        <h2>Hungry but out of ideas? Let's see what you can have for dinner today!</h2>
        <div>
            <label htmlFor="name">What's your name, hungry friend?</label>
            <input id="name" type="text" />
          </div>
        </>
    );
};

export default Welcome;