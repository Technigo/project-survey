import React, { useState } from "react";
import Form from 'Form.js';

export const App = () => {
  const [isAnswered, setAnswered] = useState(false); /* if Answered (submitted) then show answers */

  const questionList = [
    /* Dynamic list of questions as JSON */
    {
      index: 0,
      type: "input",
      text: "Hur många tacos äter du?",
      alternatives: null,
      defaultAnswer: null
    },
    {
      index: 1,
      type: 'radio',
      text: 'Vilket är godast?',
      alternatives: ['Lasagne', 'Tacos', 'Huel'],
      defaultAnswer: null
    },
    {
      index: 2,
      type: 'select',
      text: 'Favvoställe?',
      alternatives: ['Här', 'Där', 'Där borta', 'Stockholm'],
      defaultAnswer: 'Här'
    },
    {
      index: 3,
      type: "input",
      text: "Hur många bultar i Ölandsbron?",
      alternatives: null,
      defaultAnswer: null
    }
  ];

  return (
    <div>
      {!isAnswered ? <Form setAnswered={setAnswered} questions={questionList} /> : <Answers />}
    </div>
  );
};

const Answers = () => {
  return (
    <div>
      <h2>Answers</h2>
      <p>Lorem...</p>
    </div>
  );
};
