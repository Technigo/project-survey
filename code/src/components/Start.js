import React, { useState } from "react"

import IsMember from "components/IsMember"
import AgeGroup from "components/AgeGroup"
import SubmitBook from "components/SubmitBook"
import Summary from "components/Summary"



const Start = () => {
    const [ question, SetQuestion ] = useState(0)


    const OnNextQuestion = () => {
        SetQuestion(state=>state+1)
    } 

    console.log(question)
    
    if (question === 0) {
        return (
            <h2 onClick={OnNextQuestion} question={question}>Click here to start the survey</h2>
        )
    } else if (question === 1) {
        return (
            <IsMember 
            nextQuestion={OnNextQuestion}
            question={question}
            />
        )
    
    } else if (question === 2) {
        return (
            <AgeGroup
            nextQuestion={OnNextQuestion}
            question={question}
            />
        )
    } else if (question === 3) {
        return (
            <SubmitBook
            nextQuestion={OnNextQuestion}
            question={question}
            />
        )
    } else if (question === 4) {
        return (
            <Summary
            
            />
        )
    }
}

export default Start




