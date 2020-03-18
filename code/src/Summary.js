import React from "react"
import "nextbutton.css"
import "./summary.css"

export const Summary = (props) => {
    const { genre, book, number } = props
    return (<div>
        <p className="label-text summary"><span className="arrow">→</span>Your favourite genre is {genre}. </p>
        <p className="label-text summary"><span className="arrow">→</span>Your favourite book is: {book}</p>
        <p className="label-text summary"><span className="arrow">→</span>Last year you read {number} books.</p>
        <button className="button" onClick={() => window.location.reload(false)}>To Beginning ⏎  </button>
    </div>)
}