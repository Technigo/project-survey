import React from 'react'
import './Answer5.css'

const Answer5 = ({ answer, setResult, result }) => {
    const min = parseInt(answer.options.min)
    const max = parseInt(answer.options.max)

    const handleInputChange = (event) => {
        event.preventDefault()
        setResult({ ...result, answer5: event.target.value })
    }

    return (
        <div className="answer_form_range_container">
            {answer.questionNumber === 5 &&
                <form className="answer_form_range">
                    <h2 className="form_range_label">
                        From {min} to {max}
                    </h2>
                    <div className="answer5_range_container">
                        <input
                            type="range"
                            min={min}
                            max={max}
                            id={max}
                            step={1}
                            value={result.answer5}
                            onChange={event => handleInputChange(event)}
                            className="form_range_input"
                        />
                        <span className="range_output">{result.answer5 ? result.answer5 : "500"}</span>
                    </div>

                </form>
            }
        </div>

    )
}

export default Answer5
