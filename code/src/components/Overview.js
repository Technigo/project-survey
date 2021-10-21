import React from 'react'

const hungerLevel = {
    1: 'are not hungry at all!',
    2: 'could use a nibble at least!',
    3: 'could eat some cookies!',
    4: 'must take a break and have lunch or something!',
    5: 'are starving!'
}

const Overview = ({ aliasInput, radioButtonInput, questionOneInput, questionTwoInput, questionThreeInput, questionFourInput, questionFiveInput }) => {
    return (
        <div>
            <section className="overview-container">
                <h2>Survey answers</h2>
                <p>Your chosen alias is {aliasInput}.</p>
                <p>Your are feeling {radioButtonInput} today!</p>
                <p>The rudest animal would be {questionOneInput}.</p>
                <p>Cereal is {questionTwoInput} soup!</p>
                <p>You would listen in to {questionThreeInput}.</p>
                <p>The best therapist would be {questionFourInput}!</p>
                <p>You {hungerLevel[questionFiveInput]}</p>
                <h3>Thank you for answering!</h3>
            </section>
            <footer className="footer-container">
                <h4 className="creator">Created & developed by</h4>
                <p className="creator">~ Anna Dimitrakopoulos ~</p>
            </footer>
        </div>
    )
}
export default Overview