import React from 'react';

export const Result = ({ name, food, drink }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Favourite food: {food}</p>
            <p>Favourite drink: {drink}</p>
        </div>
    )
}