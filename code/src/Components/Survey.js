import React, { useState } from 'react';
import { TextQuestion } from 'Components/TextQuestion';
import { RadioQuestion } from 'Components/RadioQuestion';
import { SelectQuestion } from 'Components/SelectQuestion';
import { RangeSliderQuestion } from 'Components/RangeSliderQuestion';

export const Survey = () => {
  const [questionStep, setQuestionStep] = useState(1);
  const [firstName, setFirstName] = useState();
  const [typeOfHome, setTypeOfHome] = useState();
  const [rooms, setRooms] = useState();
  const [price, setPrice] = useState();

  const printQuestions = () => {
    return (
      <>
        {questionStep === 1 && (
          <TextQuestion
            label="First Name"
            questionId="firstName"
            onValueUpdate={(value) => {
              setFirstName(value);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 2 && (
          <RadioQuestion
            label={['Villa', 'Apartment', 'Townhouse']}
            questionId="typeOfHome"
            onValueUpdate={(value) => {
              setTypeOfHome(value);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 3 && (
          <SelectQuestion
            option={[1, 2, 3]}
            questionId="rooms"
            onValueUpdate={(value) => {
              setRooms(value);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 4 && (
          <RangeSliderQuestion
            label="SEK"
            questionId="firstName"
            onValueUpdate={(value) => {
              setPrice(value);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
      </>
    );
  }
  return (
    <div>
      <form>
        <section className="">
          {printQuestions()}
        </section>
      </form>
      <div>
        <p>Question Step: {questionStep} </p>
        <p>{firstName}</p>
        <p>{typeOfHome}</p>
        <p>{rooms}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

