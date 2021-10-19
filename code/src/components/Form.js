import React, { useState } from "react";
import AgeGroup from "components/AgeGroup";
import LevelEducation from "components/LevelEducation";
import CryptoAwareness from "components/CryptoAwareness";
import CryptoInvestment from "components/CryptoInvestment";
import InvestPossibility from "components/InvestPossibility";
import NameCoin from "components/NameCoin";
import Overview from "components/Overview";

const Form = () => {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState();
  const [levelEducation, setLevelEducation] = useState();
  const [cryptoAwareness, setCryptoAwareness] = useState();
  const [cryptoInvestment, setCryptoInvestment] = useState();
  const [investPossibility, setInvestPossibility] = useState();
  const [nameCoin, setNameCoin] = useState("");

  const onStepChange = () => setStep(step + 1);
  const onAgeGroupChange = (event) => setAgeGroup(event.target.value);
  const onLevelEducationChange = (event) =>
    setLevelEducation(event.target.value);
  const onCryptoAwarenessChange = (event) =>
    setCryptoAwareness(event.target.value);
  const onCryptoInvestmentChange = (event) =>
    setCryptoInvestment(event.target.value);
  const onInvestPossibilityChange = (event) =>
    setInvestPossibility(event.target.value);
  const onNameCoinChange = (event) => setNameCoin(event.target.value);

  if (step === 1) {
    return (
      <AgeGroup
        ageGroup={ageGroup}
        onAgeGroupChange={onAgeGroupChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 2) {
    return (
      <LevelEducation
        levelEducation={levelEducation}
        onLevelEducationChange={onLevelEducationChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 3) {
    return (
      <CryptoAwareness
        cryptoAwareness={cryptoAwareness}
        onCryptoAwarenessChange={onCryptoAwarenessChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 4) {
    return (
      <CryptoInvestment
        cryptoInvestment={cryptoInvestment}
        onCryptoInvestmentChange={onCryptoInvestmentChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 5) {
    return (
      <InvestPossibility
        investPossibility={investPossibility}
        onInvestPossibilityChange={onInvestPossibilityChange}
        onStepChange={onStepChange}
      />
    );
  } else if (step === 6) {
    return (
      <NameCoin
        nameCoin={nameCoin}
        onNameCoinChange={onNameCoinChange}
        onStepChange={onStepChange}
      />
    );
  } else
    return (
      <div>
        <Overview
          ageGroup={ageGroup}
          levelEducation={levelEducation}
          cryptoAwareness={cryptoAwareness}
          cryptoInvestment={cryptoInvestment}
          investPossibility={investPossibility}
          nameCoin={nameCoin}
        />
        <button type="submit">submit</button>
      </div>
    );
};

export default Form;
