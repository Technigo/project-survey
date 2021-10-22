import React from 'react'
import './Answer4.css'

const Answer4 = ({ answer, setResult, result }) => {

    const handleOnChange = (event) => {
        event.preventDefault()
        setResult({ ...result, answer4: event.target.value })
    }

    return (
        <div className="answer4_dropdown_container">
            <div className="answer4_form_dropdown">
                <select
                    className="select4_form_dropdown"
                    onChange={handleOnChange}
                    value={result.answer4}
                >
                    <option value=""></option>
                    {result.answer1 === "dark" && answer.options.dark.map(option => {
                        return (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        )
                    })}
                    {result.answer1 === "ligth" && answer.options.ligth.map(option => {
                        return (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
    )
}


export default Answer4