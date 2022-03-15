import React from "react"

const Summary = (props) => {
  const {
    userName,
    gender,
    weatherType,
    vehicleType,
    speed,
    snack,
    notFriendName,
    beverageType,
    friendName,
    likeSports,
    sport,
    sandwich,
    phone,
  } = props

  Object.keys(sandwich).forEach((key) => {
    if (!sandwich[key]) delete sandwich[key]
  })
  const firstIngredient = Object.entries(sandwich)[0][0]
  const secondIngredient = Object.entries(sandwich)[1][0]

  let characterTitle = ""
  let characterName = ""
  let pronounSubject = ""
  let pronounSubjectCapitalized = ""
  let pronounDirect = ""
  let pronounReflexive = ""
  let pronounPossessive = ""
  
  if (gender === "feminine") {
    characterTitle = "Mrs."
    characterName = "Sheis"
    pronounSubject = "she"
    pronounSubjectCapitalized = "She"
    pronounDirect = "her"
    pronounReflexive = "herself"
    pronounPossessive = "her"
  } else if (gender === "masculine") {
    characterTitle = "Mr."
    characterName = "Heis"
    pronounSubject = "he"
    pronounSubjectCapitalized = "He"
    pronounDirect = "him"
    pronounReflexive = "himself"
    pronounPossessive = "his"
  } else {
    characterTitle = "Mx."
    characterName = "Theyare"
    pronounSubject = "they"
    pronounSubjectCapitalized = "They"
    pronounDirect = "them"
    pronounReflexive = "themself"
    pronounPossessive = "their"
  }

  return (
    <>
      <div className="progress">
        <div className="progress-value summary"></div>
      </div>
      <div className="form">
        <section className="text-summary">
          <h2>Summary</h2>
          <p>Name: {userName}</p>
          <p>
            Gender: {gender} - text: {characterTitle} {characterName} Theone. {pronounSubjectCapitalized} {gender === "feminine" | "masculine" ? "is" : "are"} {pronounReflexive} and who {pronounSubject} {gender === "feminine" | "masculine" ? "is" : "are"}, I like {pronounDirect} and {pronounPossessive} voice!
          </p>
          <p>Weather type: {weatherType}</p>
          <p>Vehicle type: {vehicleType}</p>
          <p>Speed: {speed}</p>
          <p>Snack: {snack}</p>
          <p>Not friend name: {notFriendName}</p>
          <p>Beverage type: {beverageType}</p>
          <p>Friend name: {friendName}</p>
          <p>Like sports: {likeSports ? "yes" : "no"}</p>
          <p>Sport: {sport}</p>
          <p>Wants ham: {sandwich.ham ? "yes" : "no"}</p>
          <p>Wants cheese: {sandwich.cheese ? "yes" : "no"}</p>
          <p>Wants egg: {sandwich.egg ? "yes" : "no"}</p>
          <p>Wants mayo: {sandwich.mayo ? "yes" : "no"}</p>
          <p>Wants turkey: {sandwich.turkey ? "yes" : "no"}</p>
          <p>Wants lettuce: {sandwich.lettuce ? "yes" : "no"}</p>
          <p>Wants tuna: {sandwich.tuna ? "yes" : "no"}</p>
          <p>Wants tomato: {sandwich.tomato ? "yes" : "no"}</p>
          <p>Wants cucumber: {sandwich.cucumber ? "yes" : "no"}</p>
          <p>Brand of mobile phone: {phone}</p>
          <p> My name is {userName ? userName : "secret"} and I really {!likeSports ? "don't " : ""}like sports. I eat my {firstIngredient} and {secondIngredient} sandwich.</p>
        </section>
      </div>
    </>
  )
}

export default Summary
