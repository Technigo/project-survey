import React from 'react';

export const AnimalQuestion = (props) => {
    const {animal, setAnimal} = props

    return (
        <label>What's your favourite animal? 
            <input
                type="text"
                value={animal}
                onChange={event => setAnimal(event.target.value)}
                required 
              />
        </label>
    );
};