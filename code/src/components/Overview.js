import React from 'react'

const Overview = (props) => {
  const {nameInput, emailInput, addressInput, selectedBeers, brewery, onOverview} = props
  return (

      <div className="overview"> 
        <section>
          <h2>My values</h2>
          <p>Name: {nameInput}</p>
          <p>E-mail: {emailInput}</p>
          <p>Address: {addressInput}</p>
          <p>You have ordered the following beer-types:</p>
          <ul>
            {selectedBeers.map((beertype, index) => (
              beertype.checked && (<li key={index}>{beertype.name}</li>)
            ))}
          </ul>
          <p>You will receive beers from {brewery} and similar brewery's</p>
        </section>
        
        <div className="button-container">
          <button onClick={onOverview} className="form-button bouncy">Restart</button>
        </div>
      </div>
    
    
  )
}

export default Overview