import React from 'react'
import './AnswerCollection.css'
import Answer6 from 'Answer6/Answer6'
import Answer1 from 'Answer1/Answer1'
import Answer2 from 'Answer2/Answer2'
import Answer3 from 'Answer3/Answer3'
import Answer4 from 'Answer4/Answer4'
import Answer5 from 'Answer5/Answer5'

const AnswerCollector = ({
    answer,
    setResult,
    result,
    showHome,
    setQuestionsRecord,
    questionsRecord,
    setShowHome,
    setCurrent }) => {

    return (
        <div className="answer_container">
            {answer.questionNumber === 1 &&
                <Answer1 answer={answer} setResult={setResult} result={result} />
            }
            {answer.questionNumber === 2 &&
                <Answer2 answer={answer} setResult={setResult} result={result} />
            }
            {answer.questionNumber === 3 &&
                <Answer3 answer={answer} setResult={setResult} result={result} />
            }
            {answer.questionNumber === 4 &&
                <Answer4 answer={answer} setResult={setResult} result={result} />
            }
            {answer.questionNumber === 5 &&
                <Answer5 answer={answer} setResult={setResult} result={result} />
            }
            {answer.questionNumber === 6 &&
                <Answer6
                    answer={answer}
                    setResult={setResult}
                    result={result}
                    showHome={showHome}
                    setQuestionsRecord={setQuestionsRecord}
                    questionsRecord={questionsRecord}
                    setShowHome={setShowHome}
                    setCurrent={setCurrent}
                />}
        </div>
    )
}

export default AnswerCollector