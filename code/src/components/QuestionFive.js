import React , { useState } from "react";


const QuestionFive = ({ questionNum, feedback, getFeedback }) => {
    

    return <>
        <label htmlFor='feedback'>
        <span>{questionNum}</span> 
        What recommendations would you offer for improving our service?
        </label>
        <textarea 
        type='text'
        value= {feedback}
        placeholder='Share your suggestion'
        onChange={e => getFeedback(e.target.value)} 
        id='feedback'
        rows = '5'
        cols = '60'
        />
    </>
}

export default QuestionFive;