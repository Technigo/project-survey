import React from 'react'

const Text = ({value, setText }) => {
    return (
        <section>
            <label htmlFor="related-text"></label>
            <h3>Coolest Power Ranger character from 1993?</h3>
            <img
                className="power-rangers-image"
                alt="power rangers"
            />
            <input
                name="related-text"
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={value}
                required
            />
        </section>)
}

export default Text