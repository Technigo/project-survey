import React from 'react'

const Overview = ({ questionOneInput, questionTwoInput, questionThreeInput, aliasInput, radioButtonInput, questionFourInput }) => {
    return (
        <section className="overview-container">
            <h2>My survey answers</h2>
            <p>Your chosen alias is {aliasInput}.</p>
            <p>Your are feeling {radioButtonInput} today!</p>
            <p>The rudest animal would be {questionOneInput}.</p>
            <p>Cereal is {questionTwoInput} soup!</p>
            <p>You would listen in to {questionThreeInput}.</p>
            <p>The best therapist would be {questionFourInput}!</p>
            <h3>Thank you for answering!</h3>
        </section>
    )
}
export default Overview