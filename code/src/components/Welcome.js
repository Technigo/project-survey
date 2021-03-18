import React, { useState } from 'react';

const Welcome = () => {
    const[name, setName] = useState('');

    const onNameChange = (e) => {
        console.log(`Name: ${e.target.value}`);
        setName(e.target.value);

    }

    return (
        <>
        <h1>Dinner plans generator</h1>
        <h2>Hungry but out of ideas? Let's see what you can have for dinner today!</h2>
        <div>
            <label htmlFor="name">What's your name, hungry friend?</label>
            <input
             id="name" 
             type="text" 
             value={name}
             onChange={onNameChange}
            />
        </div>
        </>
    );
};

export default Welcome;