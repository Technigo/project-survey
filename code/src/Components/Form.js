import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import SubmitButton from "./SubmitButton";

const technologies = ["html", "css", "js"];

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [season, setSeason] = useState("");
  const [technology, setTechnology] = useState("");
  const [inValid, setInValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // checks if the survey is complete
  const isSurveyComplete = () => {
    if (name === "") {
      return false;
    }

    if (season === "") {
      return false;
    }

    if (technology === "") {
      return false;
    }

    return true;
  };
  // run the function everytime a value changes and checks if its complete
  useEffect(() => {
    if (isSurveyComplete()) {
      console.log(`Survey Complete!`);
      setInValid(false);
    } else {
      setInValid(true);
    }
  }, [name, lastName, season, technology]);

  // when submitted, show summery of answers (values)
  if (submitted) {
    return (
      <div>
        <p>{name}</p>
        <p>{lastName}</p>
        <p>{season}</p>
        <p>{technology}</p>
      </div>
    );
  }

  return (
    <form
        // getting triggered when pressing submut buutton. 
        // Preventing from reloading the page.
        // Set submitted to true so that subbmited is rendered.
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <h2>Start by entering something</h2>
        <TextInput
          onChange={setName}
          value={name}
          placeholder="First name"
          id="first name"
        />
        <h2> Entering something</h2>
        <TextInput
          onChange={setLastName}
          value={lastName}
          placeholder="Last name"
          id="last name"
        />
      </div>
      <div>
        <h2>Select something</h2>
        <Dropdown onChange={setSeason} value={season} />
      </div>
      <div>
        <h2>Choose one thing</h2>
        {technologies.map((technology) => {
          return (
            <RadioButton
              technologyName={technology}
              onChange={setTechnology}
              key={technology}
            />
          );
        })}
      </div>
      <div>
        <SubmitButton disabled={inValid} />
      </div>
    </form>
  );
};

export default Form;
