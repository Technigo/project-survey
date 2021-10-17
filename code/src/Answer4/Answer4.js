import React from 'react'
import './Answer4.css'

const Answer4 = ({ answer, setResult, result }) => {

    const onChangeSets = (event) => {
        event.preventDefault()
        setResult({ ...result, answer4: event.target.value })
    }


    return (
        <div className="answer4_dropdown_container">
            {answer.questionNumber === 4 &&
                <>
                    <div className="answer4_form_dropdown">
                        <select
                            className="select4_form_dropdown"
                            onChange={onChangeSets}
                            value={result.answer4}
                        >
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
                    {/* <div className="dropdown4_image_container">
                        {result.answer1 === "dark" && answer.options.dark.map(option => {
                            return (
                                <div key={option.character} className="dropdown4_image_uni_container">
                                    <img className="dropdown4_image_dark dropdown_image" src={option.image} />
                                    <p>{option.character}</p>
                                </div>
                            )
                        })}
                        {result.answer1 === "ligth" && answer.options.ligth.map(option => {
                            return (
                                <div key={option.character} className="dropdown4_image_uni_container">
                                    <img className="dropdown4_image_ligth dropdown_image" src={option.image} />
                                    <p>{option.character}</p>
                                </div>
                            )
                        })}
                    </div> */}
                </>
            }
        </div>
    )
}


export default Answer4