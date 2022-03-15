import React, { useState } from "react"

import QuestionTextUserName from "./QuestionTextUserName"
import QuestionSelectMenuGender from "./QuestionSelectMenuGender"
import QuestionRadioWeather from "./QuestionRadioWeather"
import QuestionRadioVehicle from "./QuestionRadioVehicle"
import QuestionRangeSliderSpeed from "./QuestionRangeSliderSpeed"
import QuestionSelectMenuSnack from "./QuestionSelectMenuSnack"
import QuestionTextNotFriendName from "./QuestionTextNotFriendName"
import QuestionRadioBeverage from "./QuestionRadioBeverage"
import QuestionTextFriendName from "./QuestionTextFriendName"
import QuestionSingleCheckoxLikeSports from "./QuestionSingleCheckoxLikeSports"
import QuestionSelectMenuSports from "./QuestionSelectMenuSports"
import QuestionMultipleCheckboxesIngredients from "./QuestionMultipleCheckboxesIngredients"
import QuestionSelectMenuPhone from "./QuestionSelectMenuPhone"
import Summary from "./Summary"

const Form = () => {
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [weather, setWeather] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [speed, setSpeed] = useState("")
  const [snack, setSnack] = useState("")
  const [notFriendName, setNotFriendName] = useState("")
  const [beverage, setBeverage] = useState("")
  const [friendName, setFriendName] = useState("")
  const [likeSports, setLikeSports] = useState(false)
  const [sport, setSport] = useState("")
  const [ingredient, setIngredient] = useState({
    ham: false,
    cheese: false,
    egg: false,
    mayo: false,
    turkey: false,
    lettuce: false,
    tuna: false,
    tomato: false,
    cucumber: false,
  })
  const [phone, setPhone] = useState("")
  const [step, setStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)

  const onUserNameChange = (event) => {
    //event.preventDefault()
    // document.getElementById('patate').disabled = !event.target.value
    setUserName(event.target.value)
  }

  const onGenderChange = (event) => {
    setGender(event.target.value)
  }

  const onWeatherChange = (event) => {
    setWeather(event.target.value)
  }

  const onVehicleChange = (event) => {
    setVehicle(event.target.value)
  }

  const onSpeedChange = (event) => {
    setSpeed(event.target.value)
  }

  const onSnackChange = (event) => {
    setSnack(event.target.value)
  }

  const onNotFriendNameChange = (event) => {
    setNotFriendName(event.target.value)
  }

  const onBeverageChange = (event) => {
    setBeverage(event.target.value)
  }

  const onFriendNameChange = (event) => {
    setFriendName(event.target.value)
  }

  const onLikeSportsChange = (event) => {
    setLikeSports(event.target.checked)
  }

  const onSportChange = (event) => {
    setSport(event.target.value)
  }

  const onIngredientChange = (event) => {
    setIngredient({
      ...ingredient,
      [event.target.value]: event.target.checked,
    })
  }

    const onPhoneChange = (event) => {
      setPhone(event.target.value)
    }
  
  const onSummary = () => {
    setShowSummary(false)
    setUserName("")
    setGender("")
    setWeather("")
    setVehicle("")
    setSpeed("")
    setSnack("")
    setNotFriendName("")
    setBeverage("")
    setFriendName("")
    setLikeSports("")
    setSport("")
    setIngredient({
      ham: false,
      cheese: false,
      egg: false,
      mayo: false,
      turkey: false,
      lettuce: false,
      tuna: false,
      tomato: false,
      cucumber: false,
    })
    setPhone("")
    setStep(1)
  }

  const onStepChange = (motion) => {
    setStep(step + motion)
  }

  const onFinalQuestion = () => {
    setShowSummary(true)
  }

  return showSummary ? (
    <Summary
      userName={userName}
      gender={gender}
      weather={weather}
      vehicle={vehicle}
      speed={speed}
      snack={snack}
      notFriendName={notFriendName}
      beverage={beverage}
      friendName={friendName}
      likeSports={likeSports}
      sport={sport}
      ingredient={ingredient}
      phone={phone}
      onSummary={onSummary}
    />
  ) : (
    <>
      {step === 1 && (
        <QuestionTextUserName
          userName={userName}
          onUserNameChange={onUserNameChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 2 && (
        <QuestionSelectMenuGender
          userName={userName}
          gender={gender}
          onGenderChange={onGenderChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 3 && (
        <QuestionRadioWeather
          weather={weather}
          onWeatherChange={onWeatherChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 4 && (
        <QuestionRadioVehicle
          weather={weather}
          vehicle={vehicle}
          onVehicleChange={onVehicleChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 5 && (
        <QuestionRangeSliderSpeed
          vehicle={vehicle}
          speed={speed}
          onSpeedChange={onSpeedChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 6 && (
        <QuestionSelectMenuSnack
          userName={userName}
          snack={snack}
          onSnackChange={onSnackChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 7 && (
        <QuestionTextNotFriendName
          snack={snack}
          notFriendName={notFriendName}
          onNotFriendNameChange={onNotFriendNameChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 8 && (
        <QuestionRadioBeverage
          beverage={beverage}
          onBeverageChange={onBeverageChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 9 && (
        <QuestionTextFriendName
          beverage={beverage}
          friendName={friendName}
          onFriendNameChange={onFriendNameChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 10 && (
        <QuestionSingleCheckoxLikeSports
          likeSports={likeSports}
          onLikeSportsChange={onLikeSportsChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 11 && (
        <QuestionSelectMenuSports
          friendName={friendName}
          sport={sport}
          onSportChange={onSportChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 12 && (
        <QuestionMultipleCheckboxesIngredients
          ingredient={ingredient}
          onIngredientChange={onIngredientChange}
          onStepChange={onStepChange}
        />
      )}

            {step === 13 && (
        <QuestionSelectMenuPhone
          phone={phone}
          onPhoneChange={onPhoneChange}
          onStepChange={onStepChange}
          onFinalQuestion={onFinalQuestion}
        />
      )}
    </>
  )
}

export default Form
