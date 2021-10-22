import React from "react"

const QuestionProgress = ({ percent, step, questionsAmount }) => {
    return (
        <div className="counter">
            {step <= 5 && step > 0 ? (
                <div className="progress">
                    <div className="progress-bar" style={{ width: percent + "%" }} >
                    </div>
                </div>
            ) : ""
            }
            {step <= 5 && step > 0 ? (<>{step} / {questionsAmount}</>) : ""}
        </div >
    )
}

export default QuestionProgress