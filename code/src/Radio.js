import React from 'react'
import './radio.css'

/* Use .map() for the radiobuttons to set if something is checked or not */

export const Radio = (props) => {
    return (
        <>
            <h2>How old are you dude?</h2>
            <div>
                <form className="radio-container">
                    <label for={props.forOne}><input type="radio" id={props.forOne} name={props} value={props.valueOne} />{props.messageOne}</label>
                    <label for={props.forTwo}><input type="radio" id={props.forTwo} name={props} value={props.valueTwo} />{props.messageTwo}</label>
                    <label for={props.forThree}><input type="radio" id={props.forThree} name={props} value={props.valueThree} />{props.messageThree}</label>
                </form>
            </div>
        </>
    )
}