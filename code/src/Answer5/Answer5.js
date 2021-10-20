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
                            required
                            type="range"
                            min={min}
                            max={max}
                            id={max}
                            step={10000}
                            value={result.answer5}
                            onChange={handleInputChange}
                            className="form_range_input"
                            list="allies"
                        />
                        <datalist datalist id="allies" className="range_datalist">
                            <option value="0" label="0">0</option>
                            <option>10,000</option>
                            <option>20,000</option>
                            <option>30,000</option>
                            <option>40,000</option>
                            <option value="50000" label="0">50,000</option>
                            <option>60,000</option>
                            <option>70,000</option>
                            <option>80,000</option>
                            <option>90,000</option>
                            <option value="100000" label="0">100,000</option>
                        </datalist >
                        <span className="range_output">{result.answer5}</span>
                    </div>

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