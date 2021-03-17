import React from 'react';

const seasons = ['Did not watch it', '1 seasons', '2-3 seasons', '4-5 seasons', '6-7 seasons', 'Watched all of them']

export const NumberOfSeasonsRadio = (props) => {
    const {numberOfSeasons, setNumberOfSeasons} = props;

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
    </>
    );
}