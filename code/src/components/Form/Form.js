import React, { useState } from 'react';

import Card from 'components/Cards/Card';

const defaultData = {
  answer1: '',
  answer2: '',
  answer3: ''
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

  const inputProps = { formData, setForm };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEndState(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <Card
          contentType="question"
          key={`question${question.number}`}
          {...question}
          {...inputProps} />
      ))}
      <Card contentType="submission" />
      {endState && <Card contentType="summary" data={formData} />}
    </form>
  );
};

export default Form;
