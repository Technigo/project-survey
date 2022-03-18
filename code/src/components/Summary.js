import React from 'react'

export const Summary = ({quality, personality, experience, motherhood, age, step, setStep}) => {

    return (
        <div className='main'>
        <div className='summary-container'>
        <h1 tabIndex="0">LOVISA</h1>
        <h2 tabIndex="0">She is the perfect match for you!</h2>
        <p tabIndex="0">Quality: { quality } </p>
        <p tabIndex="0">Personality: { personality }</p>
        <p tabIndex="0">Experience: { experience }</p>
        <p tabIndex="0">Parenthood: { motherhood ? "Is great!" : "Noo, mothers are just home with sick kids." }</p>
        <p tabIndex="0">Age:{ age }</p>
        <div className="profile-picture" alt="Picture of Lovisa"></div>
        <button className="button" onClick={() => setStep(step - 1)}><span>BACK </span></button>
        </div>
        
        </div>
    )
}