import React, { useState } from 'react'
import { InputTypeText } from './InputTypeText'
import { InputTypeRadio } from './InputTypeRadio'
import { Button } from './Button'
import { Summary } from './Summary'
import { SelectOption } from './SelectOption'
// import './survey.css'

const colorArray = [
  "Pumpkin Orange",
  "Evil Black",
  "Spooky White",
  "Blood Red",
]

const activityArray = [
  "<Select an option>",
  "Throw a costume party",
  "Carve pumpkins",
  "Watch scary movies",
  "Visit a haunted house",
  "Trick or treat",
  "Light lots of candles",
  "Eat too much candy",
  "Some scary react coding",
  "Nothing, I hate Halloween!",
]

export const Survey = () => {

  const [name, setName] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [agreeCheckbox, setAgreeCheckbox] = useState(false);
  const [selectedColor, setSelectedColor] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <>
      {!showSummary ? (
        <form className="survey" onSubmit={handleSubmit}>

          <InputTypeText className="name" header="Let's start with your name:" name={name} setName={setName} placeholder="Name"/>
          <SelectOption className="selected-activity" header={`So ${name}, how will you spend your Halloween?`} array={activityArray} selected={selectedActivity} setSelected={setSelectedActivity} />
          <InputTypeRadio className="favourite-color" header="And last question, your favourite halloween color?" array={colorArray} selected={selectedColor} setSelected={setSelectedColor} />

          {/* <label className="checkbox">
            Do you agree?
            <input
              type="checkbox"
              checked={agreeCheckbox}
              onChange={event => setAgreeCheckbox(event.target.checked)}
            />
          </label> */}

          <Button name={name}/>

        </form>
      ) : (
      <Summary name={name} activity={selectedActivity} color={selectedColor}/>
      )}
    </>
  );

};
