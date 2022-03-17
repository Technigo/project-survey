import React from 'react'

export const Summary = ({quality, personality, experience, motherhood}) => {

    return (
        <div className='summary-container'>
        <h1>LOVISA</h1>
        <h2>She is the perfect match for you!</h2>
        <p>Quality: { quality } </p>
        <p>Personality: { personality }</p>
        <p>Experience: { experience }</p>
        <p>Motherhood: {motherhood ? "Is great!" : "Noo, mothers are just home with sick kids."}</p>
        <div className="profile-picture"></div>
        </div>
    )
}