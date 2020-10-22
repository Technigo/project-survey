import React from 'react'
import './Text.css'
import img from './images/power.jpg'


const Text = ({value, setText }) => {
    return (
        <section className="text-wrapper">
            <label htmlFor="power-ranger-text"> Write the coolest power ranger color in the textbox </label>
            <h2 tabIndex="0">Coolest Power Ranger character?</h2>
            <img 
                tabIndex="0"
                className="power-rangers-image"
                alt="visualization over power rangers posing"
                src={img}
            />
            <input
                aria-label="Text-area"
                name="power-ranger-text"
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={value}
                aria-placeholder="Coolest color is..."
                required
            />
        </section>)
}

export default Text