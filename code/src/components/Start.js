import React, { useState } from "react"

import IsMember from "components/IsMember"
import AgeGroup from "components/AgeGroup"
import SubmitBook from "components/SubmitBook"
import Summary from "components/Summary"



const Start = () => {
    const [ question, setQuestion ] = useState(0)

    const [member, setMember] = useState("")
    const [ageGroup, setAgeGroup] = useState("")
    const [submitBook, setSubmitBook] = useState({
        title: "",
        author: "",
        ISBN: ""
    })


    const OnNextQuestion = () => {
        setQuestion(state=>state+1)
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
            member={member}
            setMember={setMember}
            />
        )
    
    } else if (question === 2) {
        return (
            <AgeGroup
            nextQuestion={OnNextQuestion}
            question={question}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
            />
        )
    } else if (question === 3) {
        return (
            <SubmitBook
            nextQuestion={OnNextQuestion}
            question={question}
            setSubmitBook={setSubmitBook}
            title={submitBook.title}
            author={submitBook.author}
            isbn={submitBook.ISBN}
            

            />
        )
    } else if (question === 4) {
        return (
            <Summary
            member={member}
            ageGroup={ageGroup}
            title={submitBook.title}
            author={submitBook.author}
            isbn={submitBook.ISBN}
            />
        )
    }
}

export default Start




