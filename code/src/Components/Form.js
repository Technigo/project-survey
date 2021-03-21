import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import SubmitButton from "./SubmitButton";
import Summary from "./Summary";

const projects = ["Weather app", "Chatbot", "Music releas", "Survey"];

const Form = () => {
  const [name, setName] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const [project, setProject] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [inValid, setInValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // checks if the survey is complete
  const isSurveyComplete = useCallback(() => {
    if (name === "") {
      return false;
    }

    if (evaluation === "") {
      return false;
    }

    if (project === "") {
      return false;
    }

    if (thoughts === "") {
      return false;
    }

    return true;
  }, [name, evaluation, project, thoughts]);

  // run the function everytime a value changes and checks if its complete
  useEffect(() => {
    if (isSurveyComplete()) {
      setInValid(false);
    } else {
      setInValid(true);
    }
  }, [name, evaluation, project, thoughts, isSurveyComplete]);

  // when submitted, show summery.
  if (submitted) {
    return (
      <Summary
        name={name}
        evaluation={evaluation}
        project={project}
        thoughts={thoughts}
      />
    );
  }

  return (
    <form
      // getting triggered when pressing submit button.
      // Preventing from reloading the page.
      // Set submitted to true so that subbmited is rendered.
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="question-container">
        <p>Let's start simple - what's your name?</p>
        <TextInput
          onChange={setName}
          value={name}
          placeholder="Name"
          id="first name"
        />
      </div>
      <div className="dropdown-container">
        <p>How thriled are you about becoming a frontend developer?</p>
        <Dropdown onChange={setEvaluation} value={evaluation} />
      </div>
      <div className="radio-container">
        <p>What has been your favourite project during Technigo bootcamp?</p>
        {projects.map((project) => {
          return (
            <RadioButton
              projectName={project}
              onChange={setProject}
              key={project}
            />
          );
        })}
      </div>
      <section className="question-container">
        <p>And finally, do you have some other thoughts you'd like to share?</p>
        <TextInput
          onChange={setThoughts}
          value={thoughts}
          placeholder="Your thoughts"
          id="thougts"
        />
      </section>
      <div>
        <SubmitButton disabled={inValid} />
      </div>
    </form>
  );
};

export default Form;
