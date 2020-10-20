import React from 'react'

export const Summary = (props) => {
    //const {drink, rainyFood, restMethod, veggie, ageGroup, surveyAgain, message}
    return (
        <section>
            <h2>Summary</h2>
    <p>Grab a glass of {props.drink} and celebrate!</p>
    <p>If it was up to you we'd be eating {props.rainyFood} right now.</p>
        </section>/*Return userinput here*/
    )
}