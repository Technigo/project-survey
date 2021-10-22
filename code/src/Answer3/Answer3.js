import React from 'react'
import './Answer3.css'

const Answer3 = ({ answer, setResult, result }) => {

    const handleOnChange = (event) => {
        setResult({ ...result, answer3: event.target.value })
    }

    return (
        <div className="form_radio_container_3">
            <form className="form_radio">
                {answer.options.map(option => {
                    return (
                        <div key={answer.questionNumber} className={`form_option_background ${option === result.answer1 && `form_radio_${option}`}`}>
                            <label
                                required
                                className="form_radio_label_with_image">
                                <input
                                    required
                                    type="radio"
                                    value={option.planet}
                                    onChange={handleOnChange}
                                    checked={option.planet === result.answer3}
                                    className="form_radio_input"
                                    name={result.answer3}
                                />
                                <img className="radio_label_image" src={option.image} alt={option.planet} />
                                <span className="radio_label_with_image_text">{option.planet}</span>
                            </label>
                        </div>)
                })}
            </form>
        </div>
    )
}


export default Answer3