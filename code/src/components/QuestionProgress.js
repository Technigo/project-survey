import React from "react"

const QuestionProgress = ({ percent, step, questionsAmount }) => {
    return (
        <div className="question-counter">
            {step <= 5 && step > 0 ? (
                <div className="progress-bar">
                    <div className="progress-filler" style={{ "width": percent + "%" }} >
                    </div>
                </div>
            ) : ""
            }
            {step <= 5 && step > 0 ? (<>{step} / {questionsAmount}</>) : ""}
        </div >
    )
}

export default QuestionProgress