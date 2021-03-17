import React from 'react';

const ratings = ['Epic ending', 'I voted that they should redo it', 'Did not watch all 8 seasons']

export const Question4 = (props) => {
   const {rateEnding, setRateEnding, submit} = props;

    return (
        <>
        <form>
            What did you think about the final episode?
            {ratings.map(rate => (
                <label key={rate}>
                    <input
                        type='radio'
                        value={rate}
                        onChange={(event) => setRateEnding(event.target.value)}
                        checked={rateEnding === rate}
                    /> 
                    {rate}
                </label> 
            ))}
        </form>
    <button onClick={submit}>Submit</button>
    </>
     );
}