import React from 'react'
import './Turtles.css'
import img from './images/ninja.png'

const Turtle = props => {
    const {setTurtles, turtle} = props
    return (
        <div className="turtles-wrapper">
            <h3>and, ninja?</h3>
            <img
                className="turtles-image"
                alt="visualization of teenage mutant ninja turtles"
                src={img}
            />
            <label htmlFor="slectninja"></label>
            <select
                onChange={(event) => setTurtles(event.target.value)}
                value={turtle}
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