import React from 'react'

const Summary = ( {section, enjoy, feels, options, coffee} ) => {

  return (
    <>
    {section === 5 && ( 
    <>
    <div className="summary-section">
    <h1>Go and enjoy your coffee!</h1>
    <h2> Here are your answers:</h2>

    <p className="summary-text">You {enjoy} enjoy coffee and feel {feels} when drinking it. You prefer your coffee {options} and you drink {coffee} cups a day!</p>
    
    </div>
    </>
    )}
    </>
  )


}

export default Summary