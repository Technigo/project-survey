import React from "react";

const QuestionFive = ( {questionNum, feedback, getFeedback} ) => {
   
    return <input 
    type='text'
    value={feedback}
    onChange={e => getFeedback(e.target.value)}
    />

}

export default QuestionFive