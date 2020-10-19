import React from 'react';
import { Name } from './Name';
import { Agerange } from './AgeRange';
import { Occupation } from './Occupation';
import SelectCarModels from './CarModel';
import ReasonToBuy from './ReasonToBuy'
import AfterSalesQuestions from './AfterSalesquestion';

export const Survey = () => {
  return (
    <div className="survey-container">
      <Name />
      <Agerange />
      <Occupation />
      <SelectCarModels />
      <ReasonToBuy />
      <AfterSalesQuestions />
    </div>
  );
};