import React from 'react';

const yesOrNoAnswers = ['Yes', 'No'];

export const ParticipanceField = ({yesOrNo, setYesOrNo}) => {
    
    return (
        <>
            <label tabIndex="0">Will you participate?</label>
            {yesOrNoAnswers.map(answer => ( 
                <label htmlFor="answers" key={answer} tabIndex="0" aria-required>
                    <input
                        id="answers"
                        type="radio" 
                        value={answer}
                        onChange={event => setYesOrNo(event.target.value)}
                        checked={yesOrNo === answer}
                        name="answer"
                        required
                    />
                    {answer}
                </label>
            ))}
        </>
    )}

