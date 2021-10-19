import React, { useState } from "react";
import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";
// import Intro from "./Intro";

const Form = () => {
  // variables for counter
  // const [counter, setCounter] = useState(0);
  // const updateCounter = () => {
  //   setCounter(counter + 1);
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [favouriteCandyInput, setFavouriteCandyInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };
  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };
  const onFavouriteCandyInputChange = (event) => {
    setFavouriteCandyInput(event.target.value);
  };
  const onStepChange = () => {
    setStep(step + 1);
  };

  console.log(nameInput);

  if (step === 1) {
    return (
      <div>
        <form>
          <FirstQuestion
            nameInput={nameInput}
            onNameInputChange={onNameInputChange}
            onStepChange={onStepChange}
          />
        </form>
      </div>
    );
  } else if (step === 2) {
    return (
      <div>
        <SecondQuestion
          surnameInput={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      </div>
    );
  } else if (step === 3) {
    return <ThirdQuestion />;
  }
};

export default Form;

//   } else if (step === 3) {
//     return (
//       <div>
//         <section>
//           <h2>Your summary:</h2>
//           <p>Name: {nameInput}</p>
//           <p>Surname: {surnameInput}</p>{" "}
//         </section>
//       </div>
//     );
