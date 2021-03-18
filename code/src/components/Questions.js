import React from "react";

import { TextInput } from "./TextInput";
import { DropDown } from './DropDown';
import { Radio } from './Radio';
import {RangeSlider} from './RangeSlider';

export const Questions = props => {
  const {
    populationAge,
    setPopulationAge,
    userInput,
    setUserInput,
    futureExpectations,
    setFutureExpectations,
    yearsToMars,
    setYearsToMars,
    input,
  } = props;

  switch (input) {
    case "text":
     return <TextInput userInput={userInput} setUserInput={setUserInput} />;

    case "range":
     return <RangeSlider
        popluationAge={populationAge}
        setPopulationAge={setPopulationAge}
        min="0"
        max="100"
      />;

    case "select":
     return <DropDown
        option1="0-10 years"
        option2="10 to 20 years"
        option3="over 20 years"
        option4="over 100 years"
        option5="Never"
        yearsToMars={yearsToMars}
        setYearsToMars={setYearsToMars}
      />;
   
    case "radio":
      return <Radio
        value1="synthetic food"
        value2="flying cars"
        value3="cyborg society"
        value4="cool gadgets"
        futureExpectations={futureExpectations}
        setFutureExpectations={setFutureExpectations}
      />;

  }
};
