import React from 'react'
import './outputSummary.css'


export const OutputSummary = (props) => {
    const { first } = props
    const { second } = props
    const { third } = props
    const { fourth } = props
    return (
        <section className="self-summary">
            <p>{Range.value <= 5 && <p>I hope you feel better than a {first} soon</p>}.{<p>You mentioned that {second} has/could have made your day better. Try doing more of that!</p>}. {third === "0-5 hours" && <p>Remember the importance of sleep and try to rest more today.</p>}{<p>As your Self-care journal, I really hope that you will {fourth}. Do it for you.</p>} Remember that you matter, your feelings and emotions matter.</p>
            <h2>I am your journal, and I care</h2>
        </section>

    )
}