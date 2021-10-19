import React, { useState } from "react";

import FirstQuestion from "./FirstQuestion";
import SecondQuestion from "./SecondQuestion";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onSurnameInputChange = (event) => {
    setSurnameInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <SecondQuestion
          surnameInput={surnameInput}
          onSurnameInputChange={onSurnameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <Overview nameInput={nameInput} surnameInput={surnameInput} />
      )}
    </div>
  );

  //   if (step === 1) {
  //     return (
  //       <FirstQuestion
  //         nameInput={nameInput}
  //         onNameInputChange={onNameInputChange}
  //         onStepChange={onStepChange}
  //       />
  //     );
  //   } else if (step === 2) {
  //     return (
  //       <SecondQuestion
  //         surnameInput={surnameInput}
  //         onSurnameInputChange={onSurnameInputChange}
  //         onStepChange={onStepChange}
  //       />
  //     );
  //   } else if (step === 3) {
  //     return <Overview nameInput={nameInput} surnameInput={surnameInput} />;
  //   }

  // return (
  //   <div>
  //     <form>
  //       <label htmlFor="nameInput">Type your name</label>
  //       <input
  //         id="nameInput"
  //         type="text"
  //         value={nameInput}
  //         onChange={onNameInputChange}
  //       />

  //       <label htmlFor="surnameInput">Type your surname</label>
  //       <input
  //         id="nameInput"
  //         type="text"
  //         value={surnameInput}
  //         onChange={onSurnameInputChange}
  //       />
  //     </form>

  // <section>
  //   <h2>My values from form:</h2>
  //   <p>Name: {nameInput}</p>
  //   <p>Surname: {surnameInput}</p>
  // </section>
  //   </div>
  // );
};

export default Form;
