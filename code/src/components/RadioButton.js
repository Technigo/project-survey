import React from 'react'

const knowHeadPhones = [
    "At par with an Audiophile",
    "Just Enough to get by",
    "I don't know much"
]

export const RadioButton = ({ knowHeadPhone, setKnowHeadPhone }) => {
    return (
        <>
            <h2 className="radio-button-question" tabIndex='0'>Your understanding of you headphone is...</h2>
            <p className="radio-buttons-container">
                {knowHeadPhones.map((headphone) => (
                    <div className="each-radio-button" key={headphone}>
                        <input
                            type="radio"
                            value={headphone}
                            onChange={(event) => setKnowHeadPhone(event.target.value)}
                            checked={knowHeadPhone === headphone}
                            tabIndex='0'
                            required
                        />
                        {headphone}
                    </div>
                ))}
            </p>
        </>
    )
}