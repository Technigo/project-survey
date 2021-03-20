import React from 'react'

const FormSummary = (props) => {

    return (
        <section className="summary-container">
            <h1>Take a sneak peak at your post pandemic life!</h1>
            <p>You summarized your year as {props.word}. The first thing you're going to do post quarantine is to {props.firstActivity}. You answered "{props.lesson}" to the question if you've recosidered what's important in your life during this period of time. And as a reminder to yourself when the pandemic is over "I will remember {props.reminder}"
            </p>
        </section>
    )
}

export default FormSummary