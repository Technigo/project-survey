import React from 'react'
import './Answer6.css'

const Answer6 = ({ setResult, result }) => {

    const handleOnChange = (event) => {
        setResult({ ...result, answer6: event.target.value })
    }

    return (
        <div className="form_text_container">
            <form onSubmit={event => event.preventDefault()} className="form_text">
                <input
                    required
                    type="text"
                    id={result.answer6}
                    value={result.answer6}
                    onChange={(event) => handleOnChange(event)}
                    className="form_text_input"
                    placeholder={result.answer1 === "dark" ? "Darth Ovidious" : "Jar Ovidious"}
                />
                <label
                    className="form_text_label"
                    for={result.answer6}>
                    <span>Would you like {result.answer6 ? result.answer6 : "to use your own name"}?</span>
                </label>
            </form>
        </div>
    )
}

export default Answer6