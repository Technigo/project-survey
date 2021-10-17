import React from 'react'
import './Answer1.css'

const Answer1 = ({ answer, setResult, result }) => {
    return (
        <div className="answer_form_radio_container">
            {answer.questionNumber === 1 &&
                <form className="answer_form_radio">
                    {answer.options.map(option => {
                        return (
                            <div key={option} className={`form_option_background ${option === result.answer1 && `form_radio_${option}`}`}>
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

    )
}


export default Answer1