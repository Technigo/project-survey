import React from 'react';

const yesOrNoAnswers = ['Yes', 'No'];

export const ParticipanceField = ({yesOrNo, setYesOrNo}) => {
    
    return (
        <>
            <label tabIndex="0">Will you participate?</label>
            {yesOrNoAnswers.map(answer => ( 
                <label htmlFor="answer" key={answer} tabIndex="0" role="radiogroup">
                    <input
                        id="answer"
                        type="radio" 
                        value={answer}
                        onChange={event => setYesOrNo(event.target.value)}
                        checked={yesOrNo === answer}
                        name="answer"
                        required
                        aria-checked={yesOrNo === answer}
                    />
                    {answer}
                </label>
            ))}
        </>
    )}

