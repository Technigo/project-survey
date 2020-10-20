import React, { useState } from 'react'

const knowHeadPhones = ["Audiophile", "Just Enough", "Not at all"]

export const RadioButton = () => {
    const [knowHeadPhone, setKnowHeadPhone] = useState();
    return (
        <>
            <p className="radio-button-question">How fimiliar are you with your head phones brand?</p>
            <form>
                {knowHeadPhones.map((headphone) => (
                    <label key={headphone}>
                        <input
                            type="radio"
                            value={headphone}
                            onChange={(event) => setKnowHeadPhone(event.target.value)}
                            checked={knowHeadPhone === headphone}
                        />
                        {headphone}
                    </label>
                ))};
            </form>
        </>

    )
}