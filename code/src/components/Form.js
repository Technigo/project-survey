import React, { useState } from "react";
import Name from "./Name";
import CatType from "./CatType";
import Questions3 from "components/Questions3";
import Newsletter from "./Newsletter";
import Answers from "components/Answers";

const Form = () => {
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [game, setGame] = useState();
  const [snack, setSnacks] = useState();
  const [licoriceCandy, setLicoriceCandy] = useState();
  const [drink, setDrink] = useState();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(false);

  const onNameChange = (event) => setName(event.target.value);
  const onFoodChange = (event) => setFood(event.target.value);
  const onGameChange = (event) => setGame(event.target.value);
  const onSnacksChange = (event) => setSnacks(event.target.value);
  const onLicoriceCandyChange = (event) => setLicoriceCandy(event.target.value);
  const onDrinkChange = (event) => setDrink(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.checked);
  const onStepChange = () => setStep(step + 1);

  return (
    <div className="outer-container">
      {step === 1 && (
        <Name
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <CatType
          food={food}
          onFoodChange={onFoodChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <>
          <Questions3
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
        </>
      )}

      {step === 4 && (
        <div className="fourthQuestion">
          <Newsletter
            email={email}
            onEmailChange={onEmailChange}
            onStepChange={onStepChange}
          />
        </div>
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
    </div>
  );
};

export default Form;
