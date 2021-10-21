import React from 'react'

const Overview = ({ nameInput, locationInput, animalInput, colourInput, aeroplaneInput, olderInput, sellotapeInput }) => {

    return (
      <>
      <fieldset className="fieldset">
        <legend className="legend">The Overview</legend>
          <form className="form-container">
            <section className="overview">
              <p> Your name: <span>{ nameInput }</span></p>
              <p> Your location: <span>{ locationInput }</span></p>
              <p> Your favourite chosen animal: <span>{ animalInput} </span></p>
              <p> Your favourite colour: <span>{ colourInput }</span></p>
              <p> Can you make an aeroplane out of paper?: <span>{ aeroplaneInput }</span></p>
              <p> Future profession: <span>{ olderInput }</span></p>
              <p class="sellotape-overview"> Sellotape solution: <span>{ sellotapeInput }</span></p>
           </section>
          </form>
        
      </fieldset>
      
        <div className="thank-you">
        <p>Thank you so much for taking time to answer our questions! We always have so many
          questions and it is great that you answered some for us.
        </p>
      </div>
      </>
    )
}
export default Overview