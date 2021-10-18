import React from 'react'

const Overview = ({ questionOneInput, questionTwoInput, questionThreeInput }) => {
    return (
        <section>
            <h2>My survey answers:</h2>
            <p>Question 1: {questionOneInput}</p>
            <p>Question 2: {questionTwoInput}</p>
            <p>Question 3: {questionThreeInput}</p>
        </section>
    )
}
export default Overview