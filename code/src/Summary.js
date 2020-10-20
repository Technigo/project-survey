import React from 'react'
import './summary.css'

export const Summary = (props) => {
    //const {drink, rainyFood, restMethod, veggie, ageGroup, surveyAgain, message}
    return (
        <section className="summary__section">
            <h2>Summary</h2>
    <p>Grab a glass of {props.drink} and celebrate!</p>
    <p>If it was up to you we'd be eating {props.rainyFood} right now.</p>
    <p>When looking for restaurants you claim that you {props.restMethod}.
    And if you were to make a salad you said you'd go for {props.veggie}.
    {/* You claim to be somewhere between {props.ageGroup} years old.
    Did I understand it correctly that you answered {props.surveyAgain} when we asked if you'd take this survey again? */}</p>
        </section>
    )
}