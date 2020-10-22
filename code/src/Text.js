import React from 'react'
import './Text.css'
import img from './images/power.jpg'


const Text = ({value, setText }) => {
    return (
        <section className="text-wrapper">
            <label htmlFor="power-ranger-text"></label>
            <h2 tabIndex="0" aria-label="Coolest Power Ranger character?">Coolest Power Ranger character?</h2>
            <img 
                tabIndex="0"
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