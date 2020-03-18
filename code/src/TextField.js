import React from "react"
import "./textfield.css"


export const TextField = (props) => {
    const { book, setBook } = props
    return (
        <label  >
            <p className="label-text"><span className="arrow">→</span>And what is your favourite book?</p>
            <input className="text-field" type="text" value={book} onChange={(event) => setBook(event.target.value)} required />
        </label>

    )
}