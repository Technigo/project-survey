import React, { useState } from "react"

import IsMember from "components/IsMember"



const Start = () => {
    const [ question, SetQuestion ] = useState(0)

    const nextQuestion = () => {
        SetQuestion(+1)
    } 
    console.log(question)
    
    if (question === 0) {
        return (
            <h2 onClick={nextQuestion}>Click here to start the survey</h2>
        )
    } else if (question === 1) {
        return (
            <IsMember 
            nextQuestion={nextQuestion}
            question={question}

            />
        )
    } else if (question === 2) {
        return (
            <h2>Click here to start the survey</h2>
        )
    } else if (question === 3) {
        return (
            <h2>Click here to start the survey</h2>
        )
    } else {
        return (
            <h2>Click here to start the survey</h2>
        )
    }

}

export default Start




