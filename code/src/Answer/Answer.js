import React from 'react'
import './Answer.css'

const Answer = ({ answer, setResult, result }) => {
    console.log("answer", answer)
    return (
        <div className="answer_container">
            <div className="answer_text">
                {answer.questionNumber === 1 &&
                    <form className="answer_form_radio">
                        {answer.options.map(option => {
                            return (
                                <div key={option} className={`form_radio_${option}`}>
                                    <input
                                        type="radio"
                                        id={option}
                                        value={option}
                                        onChange={event => setResult({ answer1: event.target.value })}
                                        checked={option === result.answer1}
                                        className="form_radio_input"
                                    />
                                    <label
                                        className="form_radio_label"
                                        for={option}>
                                        <span>{option}</span>
                                    </label>
                                </div>)
                        })}
                    </form>
                }
            </div>
        </div>
    )
}


export default Answer