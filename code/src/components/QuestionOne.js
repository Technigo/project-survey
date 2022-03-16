import React, { useState } from "react";

const  QuestionOne = ({ questionNum, date, getDate }) => {
   
        
    return <>
        <label htmlFor='date' ><span>{questionNum}</span> When did you use our service?</label>
        <input 
        type='date' 
        id='date'
        value={date}
        min = '2022-01-01'
        max = '2022-20-01'
        onChange={(e) => getDate(e.target.value)}
        />
        
    </>


}

export default QuestionOne