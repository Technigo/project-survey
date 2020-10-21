import React from 'react'
import './Teletubbies.css'
import img from './images/teletubbies.jpg'

const Teletub = props => {
    const {setTeletubbies, teletubbies} = props
    return (
        <div className="teletubbies-wrapper">
            <h3>Best teletubbies character?</h3>
            <img
                className="tt-image"
                alt="south park siter of teletubbies"
                src={img}
            />
            <label htmlFor="slectquestion"></label>
                <select
                    onChange={(event) => setTeletubbies(event.target.value)}
                    value={teletubbies}
                    required
                >
                    <option value="">Choose teletubbies!</option>
                    <option value="Tinky Winky - purple">Tinky Winky - purple</option>
                    <option value="Dipsy - green">Dipsy - green</option>
                    <option value="Laa-Laa - yellow">Laa-Laa - yellow</option>
                    <option value="Po - red">Po - red</option>
                </select>
        </div>
    )

}

export default Teletub