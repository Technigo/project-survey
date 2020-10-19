import React, { useState } from 'react'
import './radio.css'

/* Use .map() for the radiobuttons to set if something is checked or not */

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