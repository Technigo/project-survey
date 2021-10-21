import React from 'react'
import Question from "../Question/Question"
import AnswerCollector from "../AnswerCollector/AnswerCollector"
import './QuestionsCard.css'


const QuestionsCard = ({
    data,
    current,
    setCurrent,
    setShowStory,
    setQuestionsRecord,
    questionsRecord,
    showHome,
    setShowHome,
    setResult,
    result,
    name,
    setName
}) => {
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
            setCurrent(null)
        }

    }

    const previousQuestion = () => {
        const newCurrent = current - 1
        setCurrent(newCurrent)

        questionsRecord.pop()
        setQuestionsRecord(questionsRecord)

        if (newCurrent === 0) {
            setShowHome(true)
        }

    }

    return (
        <div className="questionsCard_container">
            <button className="questionsCard_return_button" onClick={previousQuestion}>Return</button>
            <div className="questionsCard_text">
                <Question question={question[0]} />
                <AnswerCollector
                    answer={question[0]}
                    setResult={setResult}
                    result={result}
                    setName={setName}
                    name={name}
                    showHome={showHome}
                    setQuestionsRecord={setQuestionsRecord}
                    questionsRecord={questionsRecord}
                    setShowHome={setShowHome}
                    setCurrent={setCurrent}

                />
            </div>
            <button className="questionsCard_next_button" onClick={nextQuestion}>Next</button>

        </div>
    )
}


export default QuestionsCard