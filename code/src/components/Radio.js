import React from 'react'

import './radio.css'

/* This component is completely reusable since it uses props. 
It contains an array which contains objects consisting of value and answer. 
These are later specified in Survey where you mount the survey-components.*/

export const Radio = (props) => {
    return (
        <>
            <h2 tabIndex={'0'}>{props.question}</h2>
            <div className={'radio-container'}>
                {props.radioButtonsArray.map((group) => (
                    <label tabIndex={'0'} htmlFor={group.value} key={group.value}>
                        <input tabIndex={'0'}
                            type='radio'
                            id={group.value}
                            value={group.value}
                            onChange={event => props.setAgeGroup(event.target.value)}
                            checked={props.ageGroup === group.value}
                        /> {group.message}
                    </label> 
                ))}
            </div>
        </>
    )
};