import React from "react"

import {
  RandomUserName,
  RandomGender,
  RandomWeather,
  RandomVehicle,
  RandomSpeed,
  RandomSnack,
  RandomNotFriendName,
  RandomBeverage,
  RandomFriendName,
  RandomSport,
  RandomIngredientOne,
  RandomIngredientTwo,
  RandomPhone,
} from "../RandomChoices"

const Summary = (props) => {
  const {
    userName,
    gender,
    weather,
    vehicle,
    speed,
    snack,
    notFriendName,
    beverage,
    friendName,
    likeSports,
    sport,
    ingredient,
    phone,
  } = props

  let userNameToUse
  if (userName === "") {
    userNameToUse = RandomUserName()
  }

  let genderToUse
  if (gender === "") {
    genderToUse = RandomGender()
  }

  let characterTitle
  let characterName
  let pronounSubject
  let pronounSubjectCapitalized
  let pronounDirect
  let pronounReflexive
  let pronounPossessive

  if (genderToUse === "feminine") {
    characterTitle = "Mrs."
    characterName = "Sheis"
    pronounSubject = "she"
    pronounSubjectCapitalized = "She"
    pronounDirect = "her"
    pronounReflexive = "herself"
    pronounPossessive = "her"
  } else if (genderToUse === "masculine") {
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

  let weatherToUse
  if (weather === "") {
    weatherToUse = RandomWeather()
  }

  let vehicleToUse
  if (vehicle === "") {
    vehicleToUse = RandomVehicle()
  }

  let speedToUse
  if (speed === "") {
    speedToUse = RandomSpeed()
  }

  let snackToUse
  if (snack === "") {
    snackToUse = RandomSnack()
  }

  let notFriendNameToUse
  if (notFriendName === "") {
    notFriendNameToUse = RandomNotFriendName()
  }

  let beverageToUse
  if (beverage === "") {
    beverageToUse = RandomBeverage()
  }

  let friendNameToUse
  if (friendName === "") {
    friendNameToUse = RandomFriendName()
  }

  let sportToUse
  if (sport === "") {
    sportToUse = RandomSport()
  }

  Object.keys(ingredient).forEach((key) => {
    if (!ingredient[key]) delete ingredient[key]
  })
  let firstIngredientToUse
  let secondIngredientToUse
  if (Object.keys(ingredient).length === 2) {
    firstIngredientToUse = Object.entries(ingredient)[0][0]
    secondIngredientToUse = Object.entries(ingredient)[1][0]
  } else {
    firstIngredientToUse = RandomIngredientOne()
    secondIngredientToUse = RandomIngredientTwo()
  }

  let phoneToUse
  if (phone === "") {
    phoneToUse = RandomPhone()
  }

  return (
    <>
      <div className="form">
        <section className="text-summary">
          <h1>Summary</h1>
          <p>User name: {userNameToUse}</p>
          <p>
            Gender: {genderToUse} - text: {characterTitle} {characterName}{" "}
            Theone. {pronounSubjectCapitalized}{" "}
            {genderToUse === "non-binary" ? "are" : "is"} {pronounReflexive} and
            who {pronounSubject} {genderToUse === "non-binary" ? "are" : "is"},
            I know {pronounDirect} and {pronounPossessive} name!
          </p>
          <p>Weather: {weatherToUse}</p>
          <p>Vehicle: {vehicleToUse}</p>
          <p>Speed: {speedToUse}</p>
          <p>Snack: {snackToUse}</p>
          <p>Not friend name: {notFriendNameToUse}</p>
          <p>Beverage: {beverageToUse}</p>
          <p>Friend name: {friendNameToUse}</p>
          <p>Like sports: {likeSports ? "yes" : "no"}</p>
          <p>Sport: {sportToUse}</p>
          <p>Brand of mobile phone: {phoneToUse}</p>
          <p>
            I really {!likeSports ? "don't " : ""}like sports. I eat my{" "}
            {firstIngredientToUse} and {secondIngredientToUse} sandwich.
          </p>
        </section>
      </div>
    </>
  )
}

export default Summary
