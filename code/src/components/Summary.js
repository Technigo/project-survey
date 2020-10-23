import React from 'react'

/*function that changes src for image depending on the animal chosen*/ 
export const returnImageUrl = (animal) => {
  switch (animal) {
    case 'Hippo':
      return 'images/hippo.svg'
    case 'Rabbit':
      return 'images/rabbit.svg'
    case 'Fox':
      return 'images/fox.svg'
    case 'Snake':
      return 'images/snake.svg'
    case 'zebra':
      return 'images/zebra.svg'
    case 'elephant':
      return 'images/elephant.svg'
    default:
      return 'images/information.svg'
  }
}

export const Summary = ({name, personality, spiritAnimal, age}) => {

  return (
    <section className="summary-container">
      <h2 tabIndex="0">RESULT</h2>
      <p tabIndex="0">Hi {name}! Your spirit animal is a {age} year old, {personality} {spiritAnimal}.</p>

      <img 
        tabIndex="0"
        src={returnImageUrl(spiritAnimal)} 
        alt={spiritAnimal}
      />
        
      <p tabIndex="0">Not happy with the result?</p>
      <button onClick={() => window.location.reload(false)}>Try again!</button>

      <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    </section>
  )
}

