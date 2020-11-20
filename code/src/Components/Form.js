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
    console.log(activity, activityValue);
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

  console.log(activity);

  return (
    <form onSubmit={handleSubmit}>
      {section === "firstQuestion" && (
        <section>
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
        </section>
      )}
      {section === "secondQuestion" && (
        <section>
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
        </section>
      )}
      {section === "thirdQuestion" && (
        <section>
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
        </section>
      )}
      {section === "fourthQuestion" && (
        <section>
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
        </section>
      )}
      {section === "fifthQuestion" && (
        <section>
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
        </section>
      )}
      {section === "sixthQuestion" && (
        <section>
          <SixthQuestion
            userTextInput={textInput}
            onTextInputChange={handleTextInputChange}
          />
          <SubmitButton btntext="Skicka" disabled={textInput.length < 3} />
        </section>
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
  );
};
export default Form;
