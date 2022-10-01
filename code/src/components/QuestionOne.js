import React from 'react'


export const QuestionOne = ({questionOne, setquestionOne}) => {

const questionOneAnswer = (event) =>{               //fetching the value from the user
    setquestionOne(event.target.value)
}
return(
    <>
    <p className='m-5 p-5 text-lg sm-flex'>Survey</p>
    <p className='questionOne m-6 p-5'>Describe the box in your head, is it small? Far away? What texture is it? Type your answer below:</p>
    <input className='textBox m-5 p-3'type = "text" required value={questionOne} onChange={questionOneAnswer}/>
    </>
    )
}
   