import React from 'react'

const hungerLevel = {
    1: 'You are not hungry at all! Good job!',
    2: 'You could use a cup of tea at least!',
    3: 'Do you want some cookies?',
    4: 'It is time to put something in that belly of yours!',
    5: 'You are starving! Eat something already!'
}

const Overview = ({ aliasInput, radioButtonInput, questionOneInput, questionTwoInput, questionThreeInput, questionFourInput, questionFiveInput }) => {
    return (
        <div>
            <section className="overview-container">
                <h2 className="overview-title">Survey answers</h2>
                <p className="answer-overview">Your chosen alias is {aliasInput}.</p>
                <p className="answer-overview">Your are feeling {radioButtonInput} today!</p>
                <p className="answer-overview">The rudest animal would be {questionOneInput}.</p>
                <p className="answer-overview">Cereal is {questionTwoInput} soup!</p>
                <p className="answer-overview">You would listen in to {questionThreeInput}.</p>
                <p className="answer-overview">The best therapist would be {questionFourInput}!</p>
                <p className="answer-overview">{hungerLevel[questionFiveInput]}</p>
                <h2 className="overview-message">Thank you for answering!</h2>
            </section>
            <footer className="footer-container">
                <h4 className="creator">Created & developed by</h4>
                <p className="creator">~ Anna Dimitrakopoulos ~</p>
            </footer>
        </div>
    )
}
export default Overview