import React, { useState } from 'react';
import { Colorpicker } from 'Colorpicker';
import { RadioGroup } from 'RadioGroup';
import { Select } from 'Select';
import { Welcome } from 'Welcome';
import { ProgressBar } from 'ProgressBar';
import { TextInput } from './TextInput';
import { Summary } from './Summary';
import { SubmitButton } from './SubmitButton';
import data from './data.json';

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [surveyStarted, setSurveyStarted] = useState(false);
  const [currentWindow, setCurrentWindow] = useState(-1);
  const { questions } = data;
  const [answer, setAnswer] = useState([]);

  const setWindow = () => {
    setCurrentWindow((previousWindow) => (previousWindow + 1));
  }

  const handleAnswer = (userAnswer) => {
    setAnswer((existingAnswer) => [...existingAnswer, userAnswer]);
    setWindow();
  }
  const startSurvey = () => {
    setSurveyStarted(true);
    setWindow();
  }

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setWindow();
  }

  // eslint-disable-next-line
const renderQuestions = questions.map((question,index) => {
    if (index === currentWindow && question.inputType === 'TextInput') {
      return (
        <TextInput
          key="text"
          onChange={handleAnswer}
          text={question.questionText} />
      )
    }

    if (index === currentWindow && question.inputType === 'Radio') {
      return (
        <RadioGroup
          key="radio"
          onChange={handleAnswer}
          text={question.questionText}
          options={question.options} />
      )
    }

    if (index === currentWindow && question.inputType === 'Select') {
      return (
        <Select
          key="select"
          onChange={handleAnswer}
          text={question.questionText}
          options={question.options} />
      )
    }

    if (index === currentWindow && question.inputType === 'Color') {
      return (
        <Colorpicker
          key="color"
          onChange={handleAnswer}
          text={question.questionText} />
      )
    }
  });

  return (
    <form onSubmit={(event) => submitForm(event)}>
      {!surveyStarted && !submitted
        && <Welcome
          onChange={startSurvey}
          data={data} />}
      {surveyStarted && !submitted && renderQuestions}
      {currentWindow === questions.length && <SubmitButton />}
      {submitted && <Summary answers={answer} />}
      {surveyStarted && !submitted && <ProgressBar progress={currentWindow} />}
    </form>
  )
}
