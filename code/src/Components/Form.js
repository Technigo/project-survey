import React, { useState } from "react";

import NextButton from "./NextButton";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import SixthQuestion from "./SixthQuestion";
import SubmitButton from "./SubmitButton";
import Summary from "./Summary";

import { FormWrapper, QuestionWrapper } from "../lib/FormStyle";

const Form = () => {
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState([]);
  const [recommendation, setRecommendation] = useState("");
  const [expectations, setExpectations] = useState("");
  const [textInput, setTextInput] = useState("");
  const [section, setSection] = useState("firstQuestion");

  const handleYearOfBirthChange = (event) => {
    setYearOfBirth(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActivityChange = (activityValue) => {
    activity.includes(activityValue)
      ? setActivity(activity.filter((item) => item !== activityValue))
      : setActivity([...activity, activityValue]);
  };

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleExpectationChange = (event) => {
    setExpectations(event.target.value);
  };

  const handleTextInputChange = (event) => {
    setTextInput(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSection("summary");
  };

  return (
    <FormWrapper>
    <form onSubmit={handleSubmit}>
      {section === "firstQuestion" && (
        <QuestionWrapper>
          <FirstQuestion
            userYearOfBirth={yearOfBirth}
            onYearOfBirthChange={handleYearOfBirthChange}
            section={section}
            setSection={setSection}
          />
          <NextButton
            nextQuestion="secondQuestion"
            disabled={!yearOfBirth}
            section={section}
            setSection={setSection}
          />
        </QuestionWrapper>
      )}
      {section === "secondQuestion" && (
        <QuestionWrapper>
          <SecondQuestion
            userGender={gender}
            onGenderChange={handleGenderChange}
          />
          <NextButton
            disabled={!gender}
            btntext="Nästa"
            nextQuestion="thirdQuestion"
            section={section}
            setSection={setSection}
          />
        </QuestionWrapper>
      )}
      {section === "thirdQuestion" && (
        <QuestionWrapper>
          <ThirdQuestion
            userActivity={activity}
            onActivityChange={handleActivityChange}
          />
          <NextButton
            btntext="Nästa"
            disabled={activity.length === 0}
            nextQuestion="fourthQuestion"
            section={section}
            setSection={setSection}
          />
        </QuestionWrapper>
      )}
      {section === "fourthQuestion" && (
        <QuestionWrapper>
          <FourthQuestion
            userExpectation={expectations}
            onExpectationsChange={handleExpectationChange}
          />
          <NextButton
            btntext="Nästa"
            disabled={!expectations}
            nextQuestion="fifthQuestion"
            section={section}
            setSection={setSection}
          />
        </QuestionWrapper>
      )}
      {section === "fifthQuestion" && (
        <QuestionWrapper>
          <FifthQuestion
            userRecommendation={recommendation}
            onRecommendationChange={handleRecommendationChange}
          />
          <NextButton
            disabled={!recommendation}
            btntext="Nästa"
            nextQuestion="sixthQuestion"
            section={section}
            setSection={setSection}
          />
        </QuestionWrapper>
      )}
      {section === "sixthQuestion" && (
        <QuestionWrapper>
          <SixthQuestion
            userTextInput={textInput}
            onTextInputChange={handleTextInputChange}
          />
          <SubmitButton btntext="Skicka" disabled={textInput.length < 3} />
        </QuestionWrapper>
      )}
      {section === "summary" && (
        <section className="summary">
          <h2>Sammanfattning</h2>
          <Summary
            userYearofBirth={yearOfBirth}
            userGender={gender}
            userActivity={activity}
            userRecommendation={recommendation}
            userExpectation={expectations}
            userTextInput={textInput}
            section={section}
            setSection={setSection}
          />
        </section>
      )}
    </form>
    </FormWrapper>
  );
};
export default Form;
