import React from 'react'
import './Turtles.css'
import img from './images/ninja.png'

const Turtle = props => {
    const {setTurtles, turtle} = props
    return (
        <div className="turtles-wrapper">
            <h2 tabIndex="0">and, finally best ninja?</h2>
            <img
                tabIndex="0"
                className="turtles-image"
                alt="visualization of teenage mutant ninja turtles"
                src={img}
            />
            <label htmlFor="ninja">Choose your TMNT from the select menu!</label>
            <select
                onChange={(event) => setTurtles(event.target.value)}
                value={turtle}
                aria-label="select-menu"
                aria-controls="collapse"
                aria-orientation="vertical"
                required
            >
                <option value="">Choose ninja!</option>
                <option value="Michelangelo - orange">Michelangelo - orange</option>
                <option value="Leonardo - blue">Leonardo - blue</option>
                <option value="Raphael - red">Raphael - red</option>
                <option value="Donatello - purple">Donatello - purple</option>
            </select>
        </div>
    )

}

export default Turtle