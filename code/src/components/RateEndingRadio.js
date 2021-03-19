import React from 'react';

const ratings = ['Epic ending', 'I voted that they should redo it...', 'I did not make it to the last episode']

export const RateEndingRadio = ({rateEnding, setRateEnding, handleSubmit}) => {
    const onRateEndingChange = (e) => {
        setRateEnding(e.target.value);
    };

    return (
        <>
        <form className='radiobuttons-form'>
            <h2 className='question-heading'>
                What did you think about the final episode?
            </h2>
            <div className='radiobuttons-options'>
            {ratings.map(rating => (
                <label tabIndex='0' htmlFor={rating} key={rating}>
                    <input
                        type='radio'
                        id={rating}
                        name='rate'
                        value={rating}
                        onChange={onRateEndingChange}
                        checked={rateEnding === rating}
                        required
                    /> 
                    {rating}
                </label> 
            ))}
            </div>
            <button onSubmit={handleSubmit}
                className='button'
                tabIndex='0'
                aria-pressed='false'
                aria-label='Submit survey'
                type='submit'
                > Submit!
            </button> 
        </form>
    </>
     );
}