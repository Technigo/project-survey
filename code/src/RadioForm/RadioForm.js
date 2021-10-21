import React from 'react'
import './RadioForm.css'

const RadioForm = ({ answer, setResult, result }) => {

    const handleOnChange = (event) => {

        if (answer.questionNumber === 1) {
            setResult({ ...result, answer1: event.target.value })
        }
        if (answer.questionNumber === 3) {
            setResult({ ...result, answer3: event.target.value })
        }

    }

    return (

        <form className="form_radio">
            {((answer.questionNumber === 1) || (answer.questionNumber === 3)) && answer.options.map(option => {
                return (
                    <div key={answer.questionNumber === 1 ? option : option.planet} className={`form_option_background ${option === result.answer1 && `form_radio_${option}`}`}>
                        {answer.questionNumber === 1 && <label
                            required
                            className="form_radio_label"
                        >
                            <input
                                required
                                type="radio"
                                id={answer.questionNumber === 1 ? option : option.planet}
                                value={answer.questionNumber === 1 ? option : option.planet}
                                onChange={handleOnChange}
                                checked={answer.questionNumber === 1 ? option === result.answer1 : option.planet === result.answer3}
                                className="form_radio_input"
                                name={result.answer1}
                            />
                            {option}
                        </label>}
                        {answer.questionNumber === 3 &&
                            <>
                                <label
                                    required
                                    className="form_radio_label_with_image"

                                >
                                    <input
                                        required
                                        type="radio"
                                        id={answer.questionNumber === 1 ? option : option.planet}
                                        value={answer.questionNumber === 1 ? option : option.planet}
                                        onChange={handleOnChange}
                                        checked={answer.questionNumber === 1 ? option === result.answer1 : option.planet === result.answer3}
                                        className="form_radio_input"
                                        name={result.answer3}
                                    />

                                    <img className="radio_label_image" src={option.image} alt={option.planet} />
                                    <span className="radio_label_with_image_text">{option.planet}</span>
                                </label>

                            </>}

                    </div>)
            })}
        </form>
    )
}


export default RadioForm