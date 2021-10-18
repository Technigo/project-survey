import React from "react";
import AgeGroup from "components/AgeGroup";
import LevelEducation from "components/LevelEducation";
import CryptoAwareness from "components/CryptoAwareness";
import CryptoInvestment from "components/CryptoInvestment";
import InvestPossibility from "components/InvestPosiibility";
import NameCoin from "components/NameCoin";

const Form = () => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <AgeGroup />
      <LevelEducation />
      <CryptoAwareness />
      <CryptoInvestment />
      <InvestPossibility />
      <NameCoin />
    </form>
  );
};

export default Form;
