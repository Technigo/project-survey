import React from 'react';

export const Summary = ({name, personality, spiritAnimal}) => {
   console.log({name})
    return (
        <section>
            <h2>Hi {name}! Thought you should know that your spirit animal is a {personality} {spiritAnimal}</h2>
            <p>Not happy with the result?</p>
            <button>Try again!</button>
        </section>
    )
}

