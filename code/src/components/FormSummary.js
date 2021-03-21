import React from 'react'

const FormSummary = (props) => {

    return (
        <section className="page-container">
            <header className="header-container">
                <h1>Your quarantine summary</h1>
            </header>
            <div className="summary-container">
                <h3>You summarized your life in quarantine as {props.word}.</h3>
                <h3>The first thing you're going to do post quarantine is to {props.firstActivity}.</h3>
                <h3>You answered "{props.lesson}" to the question if you've recosidered what's important in your life during this period of time.</h3>
                <h3>And as a reminder to yourself when the pandemic is over "I will remember {props.reminder}"</h3>
            </div>
        </section>
    )
}

export default FormSummary