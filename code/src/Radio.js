import React, { useState } from 'react'
import './radio.css'

/* This component is completely reusable since it uses props. 
It contains an array which contains objects consisting of value and answer. 
These are later specified in Survey where you mount the survey-components.
TO FIX: None of the radiobuttons get visually checked when pressed, but functionality works*/

export const Radio = (props) => {
    const [ageGroup, setAgegroup] = useState(false);

    const ageArray = [
        {
            answer: props.messageOne,
            value: props.valueOne
        },
        {
            answer: props.messageTwo,
            value: props.valueTwo
        },
        {
            answer: props.messageThree,
            value: props.valueThree
        }
    ]

    return (
        <>
            <h2>{props.question}</h2>
            <form className="radio-container">
                {ageArray.map((group) => (
                    <label key={group}>
                        <input
                            type='radio'
                            name={props}
                            value={group.value}
                            onChange={event => setAgegroup(event.target.value)}
                            checked={ageGroup === group}
                        /> {group.answer}
                    </label> 
                ))}
            </form>
        </>
    )

}