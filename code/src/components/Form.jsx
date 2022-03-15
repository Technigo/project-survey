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
import QuestionMultipleCheckboxesSandwich from "./QuestionMultipleCheckboxesSandwich"
import QuestionSelectMenuPhone from "./QuestionSelectMenuPhone"
import Summary from "./Summary"

const Form = () => {
  const [userName, setUserName] = useState("")
  const [gender, setGender] = useState("")
  const [weatherType, setWeatherType] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [speed, setSpeed] = useState("")
  const [snack, setSnack] = useState("")
  const [notFriendName, setNotFriendName] = useState("")
  const [beverageType, setBeverageType] = useState("")
  const [friendName, setFriendName] = useState("")
  const [likeSports, setLikeSports] = useState(false)
  const [sport, setSport] = useState("")
  const [sandwich, setSandwich] = useState({
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
    // event.preventDefault()
    setUserName(event.target.value)
  }

  const onGenderChange = (event) => {
    setGender(event.target.value)
  }

  const onWeatherTypeChange = (event) => {
    setWeatherType(event.target.value)
  }

  const onVehicleTypeChange = (event) => {
    setVehicleType(event.target.value)
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

  const onBeverageTypeChange = (event) => {
    setBeverageType(event.target.value)
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

  const onSandwichChange = (event) => {
    setSandwich({
      ...sandwich,
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
    setWeatherType("")
    setVehicleType("")
    setSpeed("")
    setSnack("")
    setNotFriendName("")
    setBeverageType("")
    setFriendName("")
    setLikeSports("")
    setSport("")
    setSandwich({
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
      weatherType={weatherType}
      vehicleType={vehicleType}
      speed={speed}
      snack={snack}
      notFriendName={notFriendName}
      beverageType={beverageType}
      friendName={friendName}
      likeSports={likeSports}
      sport={sport}
      sandwich={sandwich}
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
          weatherType={weatherType}
          onWeatherTypeChange={onWeatherTypeChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 4 && (
        <QuestionRadioVehicle
          weatherType={weatherType}
          vehicleType={vehicleType}
          onVehicleTypeChange={onVehicleTypeChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 5 && (
        <QuestionRangeSliderSpeed
          vehicleType={vehicleType}
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
          beverageType={beverageType}
          onBeverageTypeChange={onBeverageTypeChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 9 && (
        <QuestionTextFriendName
          beverageType={beverageType}
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
        <QuestionMultipleCheckboxesSandwich
          sandwich={sandwich}
          onSandwichChange={onSandwichChange}
          onStepChange={onStepChange}
        />
      )}

            {step === 13 && (
        <QuestionSelectMenuPhone
          phone={phone}
          onPhoneChange={onPhoneChange}
          onFinalQuestion={onFinalQuestion}
        />
      )}
    </>
  )
}

export default Form
