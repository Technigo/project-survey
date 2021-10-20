import React from 'react'
import './Answer6.css'

const Answer6 = ({ answer, setResult, result }) => {

    const changeScreen = (event) => {
        setResult({ answer6: event.target.value })
    }

    return (
        <div className="answer_form_radio_container">
            <form onSubmit={event => event.preventDefault()} className="answer_form_text">
                <input
                    required
                    type="text"
                    id="answer0"
                    value={result.answer6}
                    onChange={(event) => changeScreen(event)}
                    className="form_text_input"
                />
                <label
                    className="form_text_label"
                    for="answer0">
                    <span>{result.answer6}</span>
                </label>
            </form>
        </div>

    )
}


export default Answer6