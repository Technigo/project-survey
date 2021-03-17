import React, { useState } from 'react'


import Question from './Question'
import RadioInput from './RadioInput'
import SelectInput from './SelectInput'
import Submit from './Submit'
import QA from './QA.json'

console.log(QA)

const Form = () => {
       
    return (
        <>
            <form className="form">
                <div className="question-container">
                    {QA.form_content.questions.map ((question) => {
                        return (
                            <Question
                            key={question.id}
                            generatequestion={question}
                            />
                        )                        
                    })} 
                </div>
            </form>
        </>
    )
}

export default Form;


