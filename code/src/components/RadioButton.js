import React, { useState } from 'react'

const knowHeadPhones = [
    "At par with an Audiophile",
    "Just Enough to get by",
    "I dont know much"
]

export const RadioButton = () => {
    const [knowHeadPhone, setKnowHeadPhone] = useState();
    return (
        <>
            <h2 className="radio-button-question">Your understanding of you headphone is...</h2>
            <form className="radio-buttons">
                {knowHeadPhones.map((headphone) => (
                    <label key={headphone}>
                        <input
                            type="radio"
                            value={headphone}
                            onChange={(event) => setKnowHeadPhone(event.target.value)}
                            checked={knowHeadPhone === headphone}
                            required
                        />
                        {headphone}
                    </label>
                ))}
            </form>
        </>
    )
}