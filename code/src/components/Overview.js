import React from 'react'

const Overview = (props) => {
  const {nameInput, surnameInput, selectedBeers, flavour, onOverview} = props
  return (

      <div className="form"> 
        <section>
          <h2>My values</h2>
          <p>Name: {nameInput}</p>
          <p>Surname: {surnameInput}</p>
          <p>You have ordered the following beer-types:</p>
          {selectedBeers.map((beertype) => (
            beertype.checked && (<div>{beertype.name}</div>)
          ))}
          <p>You want {flavour} popcorn</p>
        </section>
        
        <div className="button-container">
          <button onClick={onOverview} className="form-button">Restart</button>
        </div>
      </div>
    
    
  )
}

export default Overview