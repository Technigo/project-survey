import React from 'react';

const yesOrNoAnswers = ['Yes', 'No'];

export const ParticipanceField = ({yesOrNo, setYesOrNo}) => {
    

    return (
            <>
                <label>Will you participate?</label>
                {yesOrNoAnswers.map(answer => ( 
                    <label key={answer}>
                        <input
                            type="radio" 
                            value={answer}
                            onChange={event => setYesOrNo(event.target.value)}
                            checked={yesOrNo === answer}
                        />
                        {answer}
                    </label>
                ))}
            </>
            )
        }

