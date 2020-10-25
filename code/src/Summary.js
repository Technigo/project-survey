import React from 'react'

export const Summary = (props) => {
    const {name, animal, otherAnimal} = props; 
    return (
    <section>
        <h1>Here's your summary:</h1>
        <p>Your name is: {name}</p>
        <p>Your favourite animal is: {animal}</p> 
    <p>And you are right, a {otherAnimal} would definately be cooler than a {animal}</p>
    <h3>Thanks for taking the time to answer!</h3>
    </section>
    );
};