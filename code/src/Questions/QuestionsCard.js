import React from 'react'
import Question from "../Question/Question"
import Answer from "../Answer/Answer"
import './QuestionsCard.css'


const QuestionsCard = ({ data, current, setCurrent, setShowStory, setQuestionsRecord, questionsRecord, setShowHome, setResult, result }) => {
    const totalQuestions = data.questions.length;

    const question = data.questions.filter(question => {
        return question.questionNumber === current
    })

    const nextQuestion = () => {
        if (current < totalQuestions) {
            const newCurrent = current + 1
            setCurrent(newCurrent)

            questionsRecord.push(newCurrent)
            setQuestionsRecord(questionsRecord)

        } else if (current === totalQuestions) {
            setShowStory(true)
        }

    }

    const previousQuestion = () => {
        if (current.lenght > 0) {
            questionsRecord.pop()
            console.log("previous", current)
        } else {
            setShowHome(true)
        }

    }

    return (
        <div className="questions_container">
            <button className="questions_return_button" onClick={previousQuestion}>Return</button>
            <div className="questions_text">
                <Question question={question[0]} />
                <Answer answer={question[0]} setResult={setResult} result={result} />
            </div>
            <button className="questions_next_button" onClick={nextQuestion}>Next</button>

        </div>
    )
}


export default QuestionsCard