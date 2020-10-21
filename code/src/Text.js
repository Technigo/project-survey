
import React from 'react'

const Text = ({ question, value, setText }) => {
    return (
        <section>
            <label htmlFor="related-text"></label>
            <h3>{question}</h3>
            <input
                name="related-text"
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={value}
            />
        </section>)
}

export default Text