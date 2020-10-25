import React from 'react';



export const OtherAnimalQuestion = (props) => {
    const {otherAnimal, setOtherAnimal} = props

    return (
        <section>
            <h2>Would any of these be cooler?</h2>
            <select
            onChange={event => setOtherAnimal(event.target.value)}
            value={otherAnimal} 
            required>
            <option value="">Choose animal..</option>
            <option value="dragon">Dragon puppy..</option>
            <option value="bunny">Bunny kitten</option>
            <option value="giraffe">Giraffe seal</option>
            <option value="snake">Snake panda</option>
            <option value="no">No.</option>
        </select>
      </section>
    );
};