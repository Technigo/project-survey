import React from 'react'
import './outputSummary.css'

// const startOver = () => {
//     document.location.href = ""
// }

export const OutputSummary = (props) => {
    const { value, answer, hour, activity } = props
    return (
        <section className="self-summary" id="summary">

            <p>{value < 5 && <p>I hope you feel better than a {value} soon</p>}.{<p>You've mentioned that "{answer}"has/could have made your day better. Try doing more of that!</p>}{hour < 8 && <p>Sleep affects both your emotional and mental state, try to rest more today.</p>}{<p>As your digital Self-care journal, I really hope that you will {activity}. Do it for you.</p>} Remember that you matter, your feelings and emotions matter.</p>
            <h2>I am your journal, and I care</h2>

            <button><a href="#intro"><h3>Start over</h3></a>
            </button>
        </section>
    )
}