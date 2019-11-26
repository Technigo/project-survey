import React, { useState } from "react";
import { Summary } from "./Summary";
import { RadioButton } from "RadioButton";
import { InputText } from "InputText";
import { InputTextarea } from "InputTextarea";
import { Submit } from "Submit";
import { Questions } from "Questions";
import { Select } from "Select";

export const App = () => {
  const [name, setName] = useState("");
  const [quality, setQuality] = useState("");
  const [time, setTime] = useState("");
  const [experience, setExperience] = useState("");
  const [hideForm, setHideForm] = useState(false);

  const handleRadioChange = event => {
    setQuality(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setHideForm(hideForm => !hideForm);
  };

  return (
    <main>
      <h1>Customer Satsfaction Survey "The Coffee time"</h1>
      {hideForm && (
        <Summary
          name={name}
          time={time}
          quality={quality}
          experience={experience}
        />
      )}
      {!hideForm && (
        <form onSubmit={handleSubmit}>
          <Questions value={"q1"} text={"Please fill in your name:"} />
          <InputText
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <Questions value={"q2"} text={`Are you satisfied with the quality of our coffee place, ${name}?`} />
          <RadioButton
            label="Yes"
            value="yes"
            checked={quality === "yes"}
            onChange={handleRadioChange}
          />
          <RadioButton
            label="No"
            value="no"
            checked={quality === "no"}
            onChange={handleRadioChange}
          />
          <Questions value={"q3"} text={"How often do you visit our place?"} />
          <Select
            value={time}
            onChange={event => setTime(event.target.value)}
          />
          <Questions value={"q4"} text={"Finally, how can we improve your experience? Do you have any ideas for us?"} />
          <InputTextarea
            value={experience}
            onChange={event => setExperience(event.target.value)}
          />
          <Submit onClick={handleSubmit} />
        </form>
      )}
    </main>
  );
};
