import React from 'react'
import './Text.css'
import img from './images/power.jpg'


const Text = ({value, setText }) => {
    return (
        <section className="text-wrapper">
            <label htmlFor="power-ranger-text"></label>
            <h2>Coolest Power Ranger character?</h2>
            <img
                className="power-rangers-image"
                alt="power rangers"
                src={img}
            />
            <input
                name="power-ranger-text"
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={value}
                placeholder="Coolest color is..."
                required
            />
        </section>)
}

export default Text