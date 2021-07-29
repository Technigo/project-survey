import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import SubmitButton from "./SubmitButton";
import Summary from "./Summary";

// Options for radiobuttons
const projects = [
  "Weather app", 
  "Chatbot", 
  "Portfolio",
  "Music releas", 
  "Survey", 
  "Todo app", 
  "Happy thougts",
  "Movie site",
  "Mobile app",
  "Quize", 
  "Maze Game",
  "Mongo-backend API",
  "Form - authentification",
  "Final Project"];

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

  // conditional rendering
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
      // triggered when pressing submit, prevent reloading, set submitted to true
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
              // Send projectName and ochChange as props to RadioButton component 
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
