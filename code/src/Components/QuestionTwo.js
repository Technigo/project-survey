import React, { useState } from 'react'


const socialMedias = ["Facebook", "Instagram", "Linkedin", "Others"];

export const QuestionTwo = () => {
    const [socialMedia, setSocialMedia] = useState("");
    return (
        <form onSubmit={event => event.preventDefault()}>
            <p>How did you find about Technigo Bootcamp?</p>

            <select className="drop-down" onChange={event => setSocialMedia(event.target.value)}
                checked={socialMedia === socialMedias}>
                <option value="">Select one</option>
                {socialMedias.map(item => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>

        </form>

    )
}











