import React from 'react'
import './Answer3.css'

const Answer3 = ({ answer, setResult, result }) => {

    const onChangeRadio = (event) => {
        event.preventDefault()
        setResult({ ...result, answer3: event.target.value })

    }

    return (
        <div className="answer3_dropdown_container">
            {answer.questionNumber === 3 &&
                <form className="answer3_form_radio">
                    {answer.options.map(option => {
                        return (
                            <div key={option.planet} className="answer3_form_radio_container">
                                <input
                                    type="radio"
                                    id={option.planet}
                                    value={option.planet}
                                    onChange={onChangeRadio}
                                    checked={option.planet === result.answer3}
                                    className="answer3_radio_input"
                                />
                                <label
                                    className="answer3_radio_label"
                                    for={option.planet}>
                                    <p className="answer3_radio_text">{option.planet}</p>
                                    <img className="answer3_radio_image" src={option.image} />
                                </label>
                            </div>)
                    })}
                </form>
            }
        </div>
    )
}


export default Answer3