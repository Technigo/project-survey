import React from 'react'
import './summary.css'
/* This is not completely reusable, if I would like to do so 
I'd change the text inside each <p></p> to be props and specify the props in Survey.js. */
export const Summary = (props) => {

    return (
    <section className="summary__section">
    <h2 tabIndex={'0'}>Summary</h2>
    <p tabIndex={'0'}>Grab a glass of {props.drink} and celebrate! You just finished this fantastic survey!</p>
    <p tabIndex={'0'}>Your choice of rainy food: "{props.rainyFood}".</p>
    <p tabIndex={'0'}>Your answer to how to choose restaurant: "{props.restMethod}".</p>
    <p tabIndex={'0'}>Your choice of salad ingrediens: "{props.veggie}".</p>
    <p tabIndex={'0'}>Your agegroup: {props.age}.</p>
    {props.surveyAgain ?
    <p tabIndex={'0'}>You'd gladly take this survey again, fantastic!</p>
    :<p tabIndex={'0'}>You decided not to take this survey again.</p>
    }
    <p tabIndex={'0'}>Your message about this survey: "{props.userMessage}"</p>
    </section>
    )
}