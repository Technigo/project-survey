import React from 'react'
import './Radio.css'
import img from './images/sm.png'

const sailorMoons = [
    "Sailor Moon - yellow",
    "Sailor Saturn - purple",
    "Sailor Mars - red",
    "Sailor Pluto - green"
]

const SailorMoon = props => {
    const { setSailorMoon, sailorMoon } = props
    return (
        <div className="sailor-moon-wrapper">
            <h2 tabIndex="0">Sailor Moon character?</h2>
            <img
                tabIndex="0"
                className="sailor-moon-image"
                alt="visualization of sailor moon group"
                src={img}
            />
            <label htmlFor="sailor">Choose one Sailor Moon character!</label>
            {sailorMoons.map(group => (
                <label className="radiobuttons-label" htmlFor={group} key={group}>
                    <input
                        type="radio"
                        id={group}
                        name={group}
                        value={group}
                        onChange={event => setSailorMoon(event.target.value)}
                        checked={sailorMoon === group}
                    />
                    {group}
                </label>
            ))}
        </div>
    )
}

export default SailorMoon