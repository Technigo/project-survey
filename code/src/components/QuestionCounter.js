import React from 'react';

// Component for the question counter and the progress bar

export const QuestionCounter = ({percentage, question, total}) => {  
  return (
    <div className="question-counter">
      {question <= 5 && question > 0 ? (
        <div className="progress-bar">
          <div className="progress-filler" style={{ width: `${percentage}%` }}>
          </div>
        </div>
      ) : ""}
      {question <= 5 && question > 0 ? (<>{question} / {total}</>) : ""}
    </div>
  )
}