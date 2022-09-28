import React from 'react'


export const QuestionOne = ({questionOne, setquestionOne}) => {

const questionOneAnswer = (event) =>{               //fetching the value from the user
    setquestionOne(event.target.value)
}
return(
    <>
        <p className='questionOne m-6'>Describe the box in your head, is it small? Far away? What texture is it? Type your answer below:</p>
        <input className='textBox m-5 p-3'type = "text" value={questionOne} onChange={questionOneAnswer}/>
    </>
    )
}
   