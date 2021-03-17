import React from 'react';

const seasons = ['Did not watch it', '1 seasons', '2-3 seasons', '4-5 seasons', '6-7 seasons', 'Watched all of them']

export const Question2 = (props) => {
    const {numberOfSeasons, setNumberOfSeasons, next2} = props;

    return (
        <>
        <form>
            How many seasons did you watch?
            {seasons.map(number => (
                <label key={number}>
                    <input
                        type='radio'
                        value={number}
                        onChange={(event) => setNumberOfSeasons(event.target.value)}
                        checked={numberOfSeasons === number}
                    /> 
                    {number}
                </label> 
            ))}
        </form>
        <button onClick={next2}>Next</button>
    </>
    );
}