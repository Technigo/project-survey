import React from 'react'
import './outputSummary.css'

const startOver = () => {
    document.location.href = ""
}

export const OutputSummary = (props) => {
    const { answer } = props
    const { hour } = props
    const { activity } = props

    return (
        <section className="fourth-question" id="activity">
            <div className="self-summary">
                <p>{<p>I hope you feel better soon.</p>}{<p>You've mentioned that "{answer}"has/could have made your day better. Try doing more of that!</p>}{hour < 8 && <p>Sleep affects both your emotional and mental state, try to rest more today.</p>}{<p>As your digital Self-care journal, I really hope that you will {activity}. Do it for you.</p>} Remember that you matter, your feelings and emotions matter.</p>
                <h2>I am your journal, and I care</h2>
                <button type="submit"
                    tabIndex="0"
                    aria-label="Start over"
                    onClick={startOver}>
                    <h3>start over</h3>
                </button>
            </div>
        </section>
    )
}