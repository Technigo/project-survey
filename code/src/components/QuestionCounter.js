import React from 'react';

export const QuestionCounter = ({percentage, question, total}) => {  
  return (
    <div className="question-counter">
      {question <= 5 && question > 0 ? (
        <div className="progress-bar">
          <div className="filler" style={{ width: `${percentage}%` }}>
          </div>
        </div>
      ) : ""}
      {question <= 5 && question > 0 ? (<>{question} / {total}</>) : ""}
    </div>
  )
}