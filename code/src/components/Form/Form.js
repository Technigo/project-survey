import React, { useState } from 'react';

import Card from 'components/Cards/Card';
import Steps from 'components/Steps/Steps';

const defaultData = {
  answer1: {
    id: 'answer1',
    answer: '',
    result: 'Dog made you think of'
  },
  answer2: {
    id: 'answer2',
    answer: '',
    result: [
      'You really like new ideas',
      'You are ok with new ideas',
      "You don't really care if someone has a new idea",
      "You don't like new ideas",
      'You really hate new ideas'
    ]
  },
  answer3: {
    id: 'answer3',
    answer: '',
    result: [
      'You like to repair things',
      'You would probably be good as a chemist',
      'You like to hide in the shadows',
      'You have the right mindset to become a doctor',
      'You can survive anything!'
    ]
  }
};

const questions = [
  {
    number: 1,
    inputName: 'answer1',
    type: 'text',
    question: '1. Write down the first word you think of when you read this word...',
    content: {
      type: 'button',
      data: 'Dog'
    }
  },
  {
    number: 2,
    inputName: 'answer2',
    type: 'radio',
    question:
      '2. How strongly do you agree that this statement is something you would say?',
    options: ['Strongly Agree', 'Agree', 'No opinion', 'Disagree', 'Strongly Disagree'],
    content: {
      type: 'text',
      data: '"I\'m slow to embrace new ideas."'
    }
  },
  {
    number: 3,
    inputName: 'answer3',
    type: 'select',
    question: '3. What do you see when you look at this?',
    options: [
      'A broken chain',
      'A chemical reaction',
      'A shadow in a doorframe',
      'An oozing wound',
      'An angry two-headed ant'
    ],
    content: {
      type: 'image',
      data: '/assets/images/ror1.png',
      dataAlt: 'rorschach'
    }
  }
];

const Form = () => {
  const [formData, setForm] = useState(defaultData);
  const [endState, setEndState] = useState(false);
  const [step, setStep] = useState(1);

  const inputProps = { formData, setForm };
  const stepProps = { step, setStep };

  const maxSteps = questions.length + 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === maxSteps) {
      setEndState(true);
    }
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        {questions.map(
          (question) => question.number === step && (
            <Card
              contentType="question"
              key={`question${question.number}`}
              {...question}
              {...inputProps} />
          )
        )}
        {step === maxSteps && !endState && <Card contentType="submission" />}
        {endState && <Card contentType="summary" data={formData} />}
      </form>
      {!endState && <Steps {...stepProps} maxSteps={maxSteps} />}
    </>
  );
};

export default Form;
