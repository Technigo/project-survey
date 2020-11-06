import React from 'react'

import './Text.css'
import img from './images/power.jpg'


const Text = ({ question, value, setText }) => {
  return (
    <section className="text-wrapper">
      <h2 tabIndex="0">{question}</h2>
      <img
        tabIndex="0"
        className="power-rangers-image"
        alt="visualization over power rangers posing. Colors are: red, black, pink, yellow, green or blue."
        src={img}
      />
      <label tabIndex="0"
        htmlFor="power-ranger-text"> Write the coolest power ranger color in the text box. </label>
      <input
        aria-label="Text-area"
        id="power-ranger-text"
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={value}
        placeholder="Coolest color is..."
        autocomplete="on"
        onKeyPress={event => {
          event.key === 'Enter' && event.preventDefault()
        }}
      />
    </section>)
}

export default Text