import React from 'react'
import './radio.css'

/* This component is completely reusable since it uses props. 
It contains an array which contains objects consisting of value and answer. 
These are later specified in Survey where you mount the survey-components.
TO FIX: None of the radiobuttons get visually checked when pressed, but functionality works*/

export const Radio = (props) => {

    const ageArray = [
        {
            answer: props.messageOne,
            value: props.valueOne,
            id: props.valueOne
        },
        {
            answer: props.messageTwo,
            value: props.valueTwo,
            id: props.valueTwo
        },
        {
            answer: props.messageThree,
            value: props.valueThree,
            id: props.valueThree
        }
    ]

    return (
        <>
            <h2>{props.question}</h2>
            <div className="radio-container">
                {ageArray.map((group) => (
                    <label key={group.id}>
                        <input
                            type='radio'
                            name={props}
                            value={group.value}
                            onChange={event => props.setAgegroup(event.target.value)}
                            checked={props.ageGroup === group}
                        /> {group.answer}
                    </label> 
                ))}
            </div>
        </>
    )

}