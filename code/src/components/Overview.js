import React from 'react'
import AnimalChoices from './AnimalChoices'

 export const Overview = ({ nameInput, locationInput, animalInput, colourInput, aeroplaneInput, olderInput, sellotapeInput }) => {

    return (
      <section className = "overview-all">
        <fieldset className = "fieldset">
          <legend className = "legend">The Overview</legend>
            <form className = "form-container">
              <section className = "overview">
                <p> Your name: <span>{ nameInput }</span></p>
                <p> Your location: <span>{ locationInput }</span></p>
                <p> Your favourite chosen animal: <span>{ animalInput} </span></p>
                <p> Your favourite colour: <span class="colour">{ colourInput }</span></p>
                <p> Can you make an aeroplane out of paper?: <span>{ aeroplaneInput }</span></p>
                <p> Future profession: <span>{ olderInput }</span></p>
                <p class="sellotape-overview"> Sellotape solution: <span>{ sellotapeInput }</span></p>
            </section>
            </form>
        
        </fieldset>
        
      

        <div className = "animal">
          <AnimalChoices
          animalInput = {animalInput}/>
          </div>  
        <div className = "thank-you">
          <h1> THANK YOU!</h1>
          <p>Thank you so much for taking time to answer our questions! We always have so many
            questions and it is great that you answered some for us. And here is a picture of your favourite animal!
          </p>
         
        </div> 
      </section>
    )
}

