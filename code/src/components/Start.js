import React, { useState } from "react"

import IsMember from "components/IsMember"
import AgeGroup from "components/AgeGroup"
import SubmitBook from "components/SubmitBook"
import Summary from "components/Summary"

const Start = () => {
    const [question, setQuestion] = useState(0)

    const [member, setMember] = useState("")
    const [ageGroup, setAgeGroup] = useState("")
    const [book, setBook] = useState({
        title: "",
        author: "",
        isbn: ""
    })

    const OnNextQuestion = () => {
        setQuestion(state => state + 1)
    }

    if (question === 0) {
        return (
            <div className="start">
                <div className="main-card">
                    <button aria-label="Click here to start the survey" className="start-button" onClick={OnNextQuestion} question={question}>
                        Suggest a book </button>
                    <div className="time-it-takes-wrapper">
                        <img className="horloge-icon" src="./images/horloge-vintage.svg" alt="horloge icon" /> <p>takes 1 minute</p>
                    </div>
                </div>
                <p className="description"> We need help from enthusiatic readers like yourself to pick a book for our next book discussion.</p>
            </div>
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
                book={book}
                setBook={setBook}
            />
        )
    } else if (question === 4) {
        return (
            <Summary
                member={member}
                ageGroup={ageGroup}
                book={book}
                setBook={setBook}
            />
        )
    }
}

export default Start




