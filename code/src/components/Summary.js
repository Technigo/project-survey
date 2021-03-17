import React from 'react'

const Summary = ( {section, tech, hours, pets, coffee} ) => {
  
  const generateEmoji = () => {
    if ({pets} === "a dog") {
      return (
        <span>🐶</span>
      )
    }
  }

  return (
    <>
    {section === 5 && ( 
    <>
    <div className="summary-section">
    <h1>Thank you for participating!</h1>
    <h2>Below is a summary of your answers:</h2>

    <p className="summary-text">You master {tech}. You code {hours} hours a day. You have {generateEmoji()} and you drink {coffee} cups of ☕️ a day!</p>

    </div>
    </>
    )}
    </>
  )


}

export default Summary