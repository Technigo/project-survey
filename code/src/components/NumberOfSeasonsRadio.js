import React from 'react';

const seasons = ['Game of Thrones, what is that?', '1 seasons', '2-3 seasons', '4-5 seasons', '6-7 seasons', 'Binge-watched all of them!']

export const NumberOfSeasonsRadio = ({numberOfSeasons, setNumberOfSeasons, handleSubmit}) => {
    const onNumberOfSeasonsChange = (e) => {
        console.log(`Number of seasons: ${e.target.value}`);
        setNumberOfSeasons(e.target.value);
    };

    return (
        <>
        <form className="radiobuttons-form">
            <h2 className="question-heading">
                How many seasons did you watch?
            </h2>
            <div className='radiobuttons-options'>
            {seasons.map(number => (
                <label htmlFor={number} key={number}>
                    <input
                        type='radio'
                        id={number}
                        name='number'
                        value={number}
                        onChange={onNumberOfSeasonsChange}
                        checked={numberOfSeasons === number}
                        required
                    /> 
                    {number}
                </label> 
            ))}
            </div>
            <button onSubmit={handleSubmit}
                className="button"
                type='submit'
                > Next!
            </button> 
        </form>
    </>
    );
}