import React from 'react';

const AnswerEvaluationButtonOptions = ({
    answerEvaluation, 
    setAnswerEvaluation,
    onAnswerEvaluationChanged

}) => {
    return (
        <>
            <label htmlFor={answerEvaluation} key={answerEvaluation} >{answerEvaluation}</label>
                <input 
                    name="characteristics"
                    id={answerEvaluation} 
                    value={answerEvaluation}
                    type="radio"
                    onChange={(e) => {
                        onAnswerEvaluationChanged(e);
                    }}
                />   
            </>
    );
};

export default AnswerEvaluationButtonOptions;