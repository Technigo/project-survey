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
  //   const [training, setTraining] = useState("");

  //   const [visible, setVisible] = useState(false);
  const [question, setQuestion] = useState("Question1");

  const questionList = ["Question1", "Question3", "Question4", "Summary"];

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

  //   const handleTrainingChange = (event) => {
  //     setTraining(event.target.value);
  //   };

  console.log(colors);

  //   const onSubmit = (event) => {
  //     setVisible(true);
  //   };

  //   if (visible === true) {
  //     return (
  //       <>
  //         <h1>Summary</h1>
  //         <h3>
  //           {city} {colors} {name}{" "}
  //         </h3>
  //       </>
  //     );
  //   }

  const handleNextQuestion = (event) => {
    event.preventDefault();
    const nextQuestion = questionList.indexOf(question);
    setQuestion(questionList[nextQuestion + 1]);
  };

  return (
    <>
    {question !== "Summary" ? (
      <form className="form-container" onSubmit={onSubmit}>
        <div>
          <Question1 city={city} onCityChange={handleCityChange} />
        </div>
        {/* {!setVisible && ( */}
        <div>
          <Question3 colors={colors} onColorsChange={handleColorsChange} />
        </div>
        )}
        {!setVisible && (
          <div>
            <Question4 userName={name} onNameChange={handleNameChange} />
          </div>
        )}
        <button
          className="submit-button"
          type="submit"
          onClick={(event) => onSubmit()}
        >
          Submit
        </button>
      </form>
    ):(
        <div>
            <Summary 
            name={name}
            color={colors}
            city={city}
            />
            )}
        </div>
    )
    </>
  );
};
export default Form;
