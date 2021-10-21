import React from "react";
import { useState } from "react/cjs/react.development";


// const radioButtonsAnswers = ["true", "false", "unsure"];


const RadioButtons = (props) => {
  const [WebLanguage, setWebLanguage] = useState();
  const radioButtonsAnswers = ["true", "false", "unsure"];


  return (

    <section className="questions-section">
    <h2 className="heading-two">True or False</h2>


   
      <form>
        A parameter is the value inside the function once is invoked:
        {radioButtonsAnswers.map((answer) => (
          <label className="label-dropdown" key={answer}>
            <input
              type="radio"
              value={answer}
              onChange={(event) => setWebLanguage(event.target.value)}
              checked={WebLanguage === answer}
            />
            {answer}
          </label>
        ))}
      </form>



      <button onClick={props.onStepChange}>next question</button>

      </section>
  );
};

export default RadioButtons;


