import React, { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
import FourthQuestion from "./FourthQuestion";
import FifthQuestion from "./FifthQuestion";
import SixthQuestion from "./SixthQuestion";
import Summary from "./Summary";

const Form = () => {
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [activities, setActivities] = useState([]);
  const [recommendation, setRecommendation] = useState("");
  const [expectations, setExpectations] = useState("");
  const [textInput, setTextInput] = useState("");
  const [section, setSection] = useState("firstQuestion");
  const [printString, setPrintString] = useState("");
  
  const handleYearOfBirthChange = event => {
    setYearOfBirth(event.target.value);
  };

  const handleGenderChange = event => {
    setGender(event.target.value);
  };

  const handleActivitiesChange = activitiesValue => {
    activities.includes(activitiesValue)
      ? setActivities( activities.filter((item) => item !== activitiesValue) )
      : setActivities( [...activities, activitiesValue] );
  };

  const handleRecommendationChange = event => {
    setRecommendation(event.target.value);
  };

  const handleExpectationChange = event => {
    setExpectations(event.target.value);
  };

  const handleTextInputChange = event => {
    setTextInput(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSection("summary");
  };

  console.log(activities)


  return (
    <>
      <form onSubmit={handleSubmit}>
        {section === "firstQuestion" && (
          <>
            <FirstQuestion
              userYearOfBirth={yearOfBirth}
              onYearOfBirthChange={handleYearOfBirthChange}
              section={section}
              setSection={setSection}
            />
          </>
        )}
        {section === "secondQuestion" && (
          <>
            <SecondQuestion
              userGender={gender}
              onGenderChange={handleGenderChange}
              section={section}
              setSection={setSection}
            />
          </>
        )}
        {section === "thirdQuestion" && (
          <>
            <ThirdQuestion
              userActivities={activities}
              onActivitiesChange={handleActivitiesChange}
              section={section}
              setSection={setSection}
            />
          </>
        )}
        {section === "fourthQuestion" && (
          <>
            <FourthQuestion
              userExpectation={expectations}
              onExpectationsChange={handleExpectationChange}
              section={section}
              setSection={setSection}
              printString={printString}
            />
          </>
        )}
        {section === "fifthQuestion" && (
          <>
            <FifthQuestion
              userRecommendation={recommendation}
              onRecommendationChange={handleRecommendationChange}
              section={section}
              setSection={setSection}
              printString={printString}
              setPrintString={setPrintString}
            />
          </>
        )}
        {section === "sixthQuestion" && (
          <div>
            <SixthQuestion
              userTextInput={textInput}
              onTextInputChange={handleTextInputChange}
              section={section}
              setSection={setSection}
            />
          </div>
        )}

        {section === "summary" && (
          <section className="summary">
            <h2>Sammanfattning</h2>

            <Summary
              userYearofBirth={yearOfBirth}
              userGender={gender}
              userActivities={activities}
              userRecommendation={recommendation}
              userExpectation={expectations}
              userTextInput={textInput}
              section={section}
              setSection={setSection}
            />
          </section>
        )}
      </form>
    </>
  );
};
export default Form;
