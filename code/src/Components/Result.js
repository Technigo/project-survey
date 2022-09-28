import React from 'react';

export const Result = ({ name, mood, drink }) => {
    return (
        <div className="results">
            <h2>Thank you for your answers! This is how you responded:</h2>
            <p>Name: {name}</p>
            <p>Current mood: {mood}</p>
            <p>Favourite drink: {drink}</p>
        </div>
    )
}