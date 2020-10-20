import React from 'react';

/*function that changes src for image depending on the animal chosen*/ 
export const displayAnimalImage = (animal) => {
  switch (animal) {
    case "Hippo":
      return "images/hippo.svg"
    case "Rabbit":
      return ""
    default:
      return "haj"
  }
}

export const Summary = ({name, personality, spiritAnimal}) => {

  return (
    <section>
        <h2 tabIndex="0">Hi {name}! Thought you should know that your spirit animal is a {personality} {spiritAnimal}</h2>
        <p>Not happy with the result?</p>
        <button onClick={() => window.location.reload(false)}>Try again!</button>

        <img src={displayAnimalImage(spiritAnimal)} alt={spiritAnimal}/>
    </section>
  )
}

