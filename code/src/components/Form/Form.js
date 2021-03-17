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
    question: 'What???'
  },
  {
    number: 2,
    inputName: 'answer2',
    type: 'radio',
    question: 'What???',
    options: ['Strongly Agree', 'Agree', 'No opinion', 'Disagree', 'Strongly Disagree']
  },
  {
    number: 3,
    inputName: 'answer3',
    type: 'select',
    question: 'What???',
    options: ['Strongly Agree', 'Agree', 'No opinion', 'Disagree', 'Strongly Disagree']
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
