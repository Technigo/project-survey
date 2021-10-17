import React from 'react'
import './Answer5.css'

const Answer5 = ({ answer, setResult, result }) => {
    const maxi = answer.option[0]
    const mini = answer.option.length - 1
    return (
        <div className="answer_form_radio_container">
            {answer.questionNumber === 1 &&
                <form className="answer_form_radio">
                    {answer.options.map(option => {
                        return (
                            <div key={option} className="answer5_range_container">
                                <input
                                    type="range"
                                    min={mini}
                                    max={maxi}
                                    step="1000"
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


export default Answer5

















 // {
        //     "questionNumber": 5,
        //     "question": "What is your favorite character in starWars",
        //     "options": {
        //         "dark": [
        //             "Darth Vader",
        //             "Conde Doku",
        //             "Darth Tyranus"
        //         ],
        //         "ligth": [
        //             "Leia Organa",
        //             "Han Solo",
        //             "Chewbaca",
        //             "Padme Amidala"
        //         ]
        //     }
        // },