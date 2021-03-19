import React from 'react';

const seasons = ['Game of Thrones, what is that?', '1 season', '2-3 seasons', '4-5 seasons', '6-7 seasons', 'Binge-watched all of them!']

export const NumberOfSeasonsRadio = ({numberOfSeasons, setNumberOfSeasons, handleSubmit}) => {
    const onNumberOfSeasonsChange = (e) => {
        setNumberOfSeasons(e.target.value);
    };

    return (
        <>
        <form className='radiobuttons-form'>
            <h2 className='question-heading'>
                How many seasons did you watch?
            </h2>
            <div>
                <div className='radiobuttons-options'>
                {seasons.map(number => (
                <label tabIndex='0' htmlFor={number} key={number}>
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
                <div>
                    <button onSubmit={handleSubmit}
                        className='button'
                        tabIndex='0'
                        aria-pressed='false'
                        aria-label='Next question'
                        type='submit'
                        > Next!
                    </button>
                </div>
            </div>
        </form>
    </>
    );
}