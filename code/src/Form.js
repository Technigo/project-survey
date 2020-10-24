import React, { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Summary from "./Summary";

// import SubmitButton from "./SubmitButton";
// import TrainingExp from "./TrainingExp";

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [colors, setColors] = useState([]);

  const [experience, setExperience] = useState("");

  const [question, setQuestion] = useState("Question1");

  const questionList = ["Question1", "Question3", "Question4", "Summary"];

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };
  //   const handleSliderChange = event => {
  //       setExperience(event.target.value === "" ? "" : )
  //   }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleColorsChange = (colorValue) => {
    colors.includes(colorValue)
      ? setColors(colors.filter((item) => item !== colorValue))
      : setColors([...colors, colorValue]);
  };

  const handleNextQuestion = (event) => {
    event.preventDefault();
    const nextQuestion = questionList.indexOf(question);
    setQuestion(questionList[nextQuestion + 1]);
  };

  return (
    <>
      {question !== "Summary" ? (
        <form className="form-container" onSubmit={handleNextQuestion}>
          {question === "Question1" && (
            <div>
              <Question1 city={city} onCityChange={handleCityChange} />
            </div>
          )}

          {question === "Question2" && (
            <div>
              <Question2
                value={experience}
                onExperienceChange={handleExperienceChange}
              />
            </div>
          )}

          {question === "Question3" && (
            <div>
              <Question3 colors={colors} onColorsChange={handleColorsChange} />
            </div>
          )}
          {question === "Question4" && (
            <div>
              <Question4 userName={name} onNameChange={handleNameChange} />
            </div>
          )}
          <button className="submit-button" type="submit">
            Next
          </button>
        </form>
      ) : (
        <div>
          <Summary name={name} colors={colors} city={city} />
        </div>
      )}
    </>
  );
};
export default Form;
