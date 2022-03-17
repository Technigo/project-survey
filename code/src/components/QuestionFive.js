import React from "react";

const QuestionFive = ( {questionNum, feedback, getFeedback} ) => {
   
    return <div className='question'>
    <label className='feedback-textarea' htmlFor="feedback">{questionNum}. Any suggestions for us? </label> 
    <textarea type='text'
    value={feedback}
    rows = '10'
    cols = '30'
    placeholder = 'Write your suggestion...'
    onChange={e => getFeedback(e.target.value)}
    />
    </div>
    


}

export default QuestionFive