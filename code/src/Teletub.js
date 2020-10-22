import React from 'react'
import './Teletubbies.css'
import img from './images/teletubbies.jpg'

const Teletub = props => {
    const {setTeletubbies, teletubbies} = props
    return (
        <div className="teletubbies-wrapper">
            <h2 tabIndex="0">Best teletubbies character?</h2>
            <img
                tabIndex="0"
                className="tt-image"
                alt="visualization of a south park siter of teletubbies"
                src={img}
            />
            <label htmlFor="teletub">Which is your favorite teletubbies?</label>
                <select
                    aria-label="select-menu"
                    id="teletub"
                    onChange={(event) => setTeletubbies(event.target.value)}
                    value={teletubbies}
                    aria-controls="collapse"
                    aria-orientation="vertical"
                    required

                >
                    <option value="">Choose teletubbies!</option>
                    <option tabindex="-1" value="Tinky Winky - purple">Tinky Winky - purple</option>
                    <option tabindex="-1" value="Dipsy - green">Dipsy - green</option>
                    <option tabindex="0" value="Laa-Laa - yellow">Laa-Laa - yellow</option>
                    <option tabindex="0" value="Po - red">Po - red</option>
                </select>
        </div>
    )

}

export default Teletub