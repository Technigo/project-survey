import React from 'react'
import AnimalChoices from './AnimalChoices'
import './overview.css'
import useWindowSize from 'react-use-window-size'
import Confetti from 'react-confetti'

export const Overview = ({ nameInput, locationInput, animalInput, colourInput, aeroplaneInput, olderInput, sellotapeInput }) => {
  const { width, height } = useWindowSize()
  return (

    <section className="overview-all">
      <Confetti
        width={width}
        height={3000}
        colors={['#feaeb9', '#a49262', '#86e5d1','#c3a2db']}
        gravity={0.08}
        numberOfPieces={350}
      />
      <fieldset className="fieldset">
        <legend className="legend">The Overview</legend>
        <form className="form-container">
          <section className="overview">
            <p> Your name: <span>{nameInput}</span></p>
            <p> Your location: <span>{locationInput}</span></p>
            <p> Your favourite chosen animal: <span>{animalInput} </span></p>
            <p> Your favourite colour: <span class="colour">{colourInput}</span></p>
            <p> Can you make an aeroplane out of paper?: <span>{aeroplaneInput}</span></p>
            <p> Future profession: <span>{olderInput}</span></p>
            <p class="sellotape-overview"> Sellotape solution: <span>{sellotapeInput}</span></p>
          </section>
        </form>

      </fieldset>



      <div className="animal">
        <AnimalChoices
          animalInput={animalInput} />
      </div>
      <div className="thank-you">
        <h1> THANK YOU!</h1>
        <p>Thank you so much for taking time to answer our questions! We always have so many
        questions and it is great that you answered some for us. And here is a picture of your favourite animal!
          </p>

      </div>
    </section>
  )
}

