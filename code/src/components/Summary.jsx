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


  let userNameToUse = userName === "" ? RandomUserName() : userName
  let genderToUse = gender === "" ? RandomGender() : gender

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

  let weatherToUse = weather === "" ? RandomWeather() : weather
  let vehicleToUse = vehicle === "" ? RandomVehicle() : vehicle
  let speedToUse = speed === "" ? RandomSpeed() : speed
  let snackToUse = snack === "" ? RandomSnack() : snack
  let notFriendNameToUse = notFriendName === "" ? RandomNotFriendName() : notFriendName
  let beverageToUse = beverage === "" ? RandomBeverage() : beverage
  let friendNameToUse = friendName === "" ? RandomFriendName() : friendName
  let sportToUse = sport === "" ? RandomSport() : sport
  let firstIngredientToUse = ingredient.length === 2 ? ingredient[0] : RandomIngredientOne()
  let secondIngredientToUse = ingredient.length === 2 ? ingredient[1] : RandomIngredientTwo()
  let phoneToUse = phone === "" ? RandomPhone() : phone

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
