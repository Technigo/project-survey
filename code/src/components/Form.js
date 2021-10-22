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
  const [no, setNo] = useState(0);
  const [email, setEmail] = useState(false);

  const onNameChange = (event) => setName(event.target.value);
  const onFoodChange = (event) => setFood(event.target.value);
  const onGameChange = (event) => setGame(event.target.value);
  const onSnacksChange = (event) => setSnacks(event.target.value);
  const onLicoriceCandyChange = (event) => setLicoriceCandy(event.target.value);
  const onDrinkChange = (event) => setDrink(event.target.value);
  const onEmailChange = (event) => setEmail(event.target.checked);
  const onStepChange = () => setStep(step + 1);
  const onNoChange = () => setNo(no + 1);
  console.log(onNoChange);

  return (
    //outer container används inte för tillfället
    <div className="outer-container">
      {step === 0 && (
        <Attend
          /* no={no} onNoChange={onNoChange}  */
          onNoChange={onNoChange}
          onStepChange={onStepChange}
        />
      )}
      {no === 1 && <DontAttend />}

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
        <>
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
        </>
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
      {no === 6 && <DontAttend />}
    </div>
  );
};

export default Form;
