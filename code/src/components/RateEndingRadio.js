import React from 'react';

const ratings = ['Epic ending', 'I voted that they should redo it...', 'I did not make it to the last episode']

export const RateEndingRadio = (props) => {
    const {rateEnding, setRateEnding} = props;

    const onRateEndingChange = (e) => {
        console.log(`Rate of ending: ${e.target.value}`);
        setRateEnding(e.target.value);
    };

    return (
        <>
        <form className='radiobuttons-form'>
            <div>
                <h2 className="question-heading">What did you think about the final episode?</h2>
            </div>
            <div className='radiobuttons-options'>
            {ratings.map(rating => (
                <label htmlFor='rate' key={rating}>
                    <input
                        type='radio'
                        id='rate'
                        value={rating}
                        onChange={onRateEndingChange}
                        checked={rateEnding === rating}
                        required
                    /> 
                    {rating}
                </label> 
            ))}
            </div>
        </form>
    </>
     );
}