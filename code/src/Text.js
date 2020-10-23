import React from 'react'
import './Text.css'
import img from './images/power.jpg'


const Text = ({value, setText }) => {
    return (
        <section className="text-wrapper">
            <h2 tabIndex="0">Coolest Power Ranger character?</h2>
            <img 
                tabIndex="0"
                className="power-rangers-image"
                alt="visualization over power rangers posing"
                src={img}
            />
            <label htmlFor="power-ranger-text"> Write the coolest power ranger color in the textbox </label>
            <input
                aria-label="Text-area"
                id="power-ranger-text"
                type="text"
                onChange={(event) => setText(event.target.value)}
                value={value}
                placeholder="Coolest color is..."
                autocomplete="on"
            />
        </section>)
}

export default Text