import React from 'react'
import './Answer1.css'

const Answer1 = ({ answer, setResult, result }) => {

    const handleOnChange = (event) => {
        setResult({ ...result, answer1: event.target.value })
    }

    return (
        <div className="form_radio_container">
            <form className="form_radio">
                {answer.options.map(option => {
                    return (
                        <div key={option} className={`form_option_background ${option === result.answer1 && `form_radio_${option}`}`}>
                            <label
                                required
                                className="form_radio_label"
                            >
                                <input
                                    required
                                    type="radio"
                                    value={option}
                                    onChange={event => handleOnChange(event)}
                                    checked={option === result.answer1}
                                    className="form_radio_input"
                                    name={result.answer1}
                                />
                                {option}
                            </label>
                        </div>)
                })}
            </form>
        </div>
    )
}

export default Answer1