import React, { useState } from "react";

import { InputTypeText } from "./InputTypeText";
import { InputTypeRadio } from "./InputTypeRadio";
import { Button } from "./Button";
import { Summary } from "./Summary";
import { TheEnd } from "./TheEnd";
import { SelectOption } from "./SelectOption";

const colorArray = [
  "Pumpkin Orange",
  "Evil Black",
  "Spooky White",
  "Blood Red",
];

const activityArray = [
  "<Select an option>",
  "Throw a costume party",
  "Carve pumpkins",
  "Watch scary movies",
  "Visit a haunted house",
  "Trick or treat",
  "Light lots of candles",
  "Eat too much candy",
  "Do some scary react coding",
  "Nothing, I hate Halloween!",
];

export const Survey = () => {
  const [section, setSection] = useState("firstQuestion");
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="survey" onSubmit={handleSubmit}>
      {section === "firstQuestion" && (
        <>
          <InputTypeText
            className="name"
            header="Let's start with your name:"
            name={name}
            setName={setName}
            placeholder="Name"
          />
          <Button
            disable={name}
            btnText="Next"
            section="secondQuestion"
            setSection={setSection}
          />
        </>
      )}

      {section === "secondQuestion" && (
        <>
          <InputTypeRadio
            className="favourite-color"
            header="Pick your favourite halloween color?"
            array={colorArray}
            selected={selectedColor}
            setSelected={setSelectedColor}
          />
          <Button
            disable={selectedColor === undefined ? "" : { selectedColor }}
            btnText="Next"
            section="thirdQuestion"
            setSection={setSection}
          />
        </>
      )}

      {section === "thirdQuestion" && (
        <>
          <SelectOption
            className="selected-activity"
            header={`What will you do on Halloween?`}
            array={activityArray}
            selected={selectedActivity}
            setSelected={setSelectedActivity}
          />
          <Button
            disable={
              selectedActivity === activityArray[0] ? "" : selectedActivity
            }
            btnText="Next"
            section="summary"
            setSection={setSection}
          />
        </>
      )}

      {section === "summary" && (
        <>
          <Summary
            name={name}
            activity={selectedActivity}
            color={selectedColor}
          />
          <Button
            disable={name}
            btnText="Hell yeah!"
            section="theEnd"
            setSection={setSection}
          />
          <button
            type="submit"
            onClick={() => window.location.reload()}
            className="submit-button"
          >
            {" "}
            No, i lied!
          </button>
        </>
      )}

      {section === "theEnd" && <TheEnd />}
    </form>
  );
};
