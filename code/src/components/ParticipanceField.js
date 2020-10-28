import React from 'react';

const yesOrNoAnswers = ['Yes', 'No'];

export const ParticipanceField = ({yesOrNo, setYesOrNo}) => {
    
    return (
        <>
            <label tabIndex="0" role="radiogroup" aria-required>Will you participate?</label>
            {yesOrNoAnswers.map(answer => ( 
                <label htmlFor="answers" key={answer} tabIndex="0" role="radio" aria-checked={yesOrNo === answer}>
                    <input
                        id="answers"
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

