import React from 'react'

const Overview = ({ questionOneInput, questionTwoInput, questionThreeInput, aliasInput, radioButtonInput, questionFourInput }) => {
    return (
        <section className="overview-container">
            <h2>My survey answers</h2>
            <p>Chosen alias: {aliasInput}</p>
            <p>Feeling: {radioButtonInput}</p>
            <p>Question 1: {questionOneInput}</p>
            <p>Question 2: {questionTwoInput}</p>
            <p>Question 3: {questionThreeInput}</p>
            <p>Question 4: {questionFourInput}</p>
            <h3>Thank you for answering!</h3>
        </section>
    )
}
export default Overview