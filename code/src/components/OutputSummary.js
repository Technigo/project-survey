import React from 'react'
import './summary.css'

const { first } = props
const { second } = props
const { third } = props
const { fourth } = props


export const OutputSummary = (props) => {
    return (
        <section className="self-summary">
            <p>{sleepOption === "0-5 hours" && <p>Remember the importance of sleep and try to rest more today.</p>}</p>
            <h2>I am your journal, and I care</h2>
        </section>

    )
}