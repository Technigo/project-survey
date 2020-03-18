import React from "react"
import "./nextbutton.css"

export const NextButton = (props) => {
    const { section, book, number, genre } = props
    return (<article >
        <button className="button"
            disabled={genre === '' || (genre != '' && section === 1 && book === '') || (genre != '' && section === 2 && number === '')}
            type="submit">Next →  </button>
    </article>)
}