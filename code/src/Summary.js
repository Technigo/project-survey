import React from 'react'

export const Summary = ({mood, animal, purple, colorhue, name}) => (
    <div className="summary">
        <p>Thank you for your answers {name}. So you're feeling {mood}, great! </p>
        <p>So in short, your spirit animal is {animal} and your favorite purple hue is {colorhue}. Same as mine! </p>
        <p>Yoyr love of purple is {purple}</p>
        <p>We will review your application in due process.</p>
        <p>Have a great day!</p>
    </div>
) 