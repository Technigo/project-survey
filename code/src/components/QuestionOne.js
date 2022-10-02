import React from 'react'


export const QuestionOne = ({questionOne, setquestionOne}) => {

const questionOneAnswer = (event) =>{               //fetching the value from the user
    setquestionOne(event.target.value)
}
return(
    <div className ='containerOne content-center'>
        <p className='questionOne mt-10 p-10'>Describe the box in your head, is it small? Far away? What texture is it? Type your answer below:</p>
        <input className='textBox m-5 p-3 rounded-full text-xl' type = "text" required value={questionOne} onChange={questionOneAnswer}/>
    </div>
    )
}
   