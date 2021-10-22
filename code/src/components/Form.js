import React, { useState } from "react";
import Attend from "components/Attend";
import Name from "./Name";
import Food from "./Food";
import Preferences from "components/Preferences";
import Email from "./Email";
import Answers from "components/Answers";
import DontAttend from "./DontAttend";

const Form = () => {
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [game, setGame] = useState();
  const [snack, setSnacks] = useState();
  const [licoriceCandy, setLicoriceCandy] = useState();
  const [drink, setDrink] = useState();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(false);

  const onNameChange = (event) => setName(event.target.value);
  const onFoodChange = (event) => setFood(event.target.value);
  const onGameChange = (event) => setGame(event.target.value);
  const onSnacksChange = (event) => setSnacks(event.target.value);
  const onLicoriceCandyChange = (event) => setLicoriceCandy(event.target.value);
  const onDrinkChange = (event) => setDrink(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.checked);
  const onStepChange = () => setStep(step + 1);
  const onNoChange = () => setStep(10);

  return (
    <div className="outer-container">
      <header></header>

      {step === 0 && (
        <Attend onNoChange={onNoChange} onStepChange={onStepChange} />
      )}

      {step === 1 && (
        <Name
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <Food
          food={food}
          onFoodChange={onFoodChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <Preferences
          game={game}
          onGameChange={onGameChange}
          snack={snack}
          onSnacksChange={onSnacksChange}
          licoriceCandy={licoriceCandy}
          onLicoriceCandyChange={onLicoriceCandyChange}
          drink={drink}
          onDrinkChange={onDrinkChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 4 && (
        <Email
          email={email}
          onEmailChange={onEmailChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Answers
          name={name}
          food={food}
          game={game}
          snack={snack}
          licoriceCandy={licoriceCandy}
          drink={drink}
          email={email}
        />
      )}

      {step === 10 && <DontAttend />}
      <footer>
        <h1>
          Hedvig Mejstedt{" "}
          <span role="img" aria-label="lion emoji">
            🦁
          </span>
        </h1>
      </footer>
    </div>
  );
};

export default Form;
