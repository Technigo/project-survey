
import { Colorpicker } from 'Colorpicker';
import { RadioGroup } from 'RadioGroup';
import React, { useState } from 'react';
import { Select } from 'Select';
import { Welcome } from 'Welcome';
import { TextInput } from './TextInput';
import { Summary } from './Summary';
import data from './data.json';
import { SubmitButton } from './SubmitButton';
import { ProgressBar } from 'ProgressBar';

export const Form = () =>                                 {
const [submitted, setSubmitted] = useState(false);
const [surveyStarted, setSurveyStarted] = useState(false);
const [currentWindow, setCurrentWindow] = useState(-1);
const questions = data.questions;
const [answer, setAnswer] = useState([]);
const handleAnswer = (answer) =>{
  setAnswer((existingAnswer) => [...existingAnswer, answer]);
  setWindow();
}
const startSurvey = () => {
  setSurveyStarted(true);
  setWindow();
}
const setWindow =() =>{
  setCurrentWindow((previousWindow) => (previousWindow +1));
}

const submitForm = (event) => {
  event.preventDefault();
  setSubmitted(true);
  setWindow();
}

// eslint-disable-next-line
const renderQuestions = questions.map((question,index) => {
    console.log("in renderForm, index is",index,"currentWin is:",currentWindow);

    if(index === currentWindow && question.inputType === "TextInput"){
      return(
        <TextInput 
        onChange={handleAnswer}
        text={question.questionText}
      />
      )
    }

    if(index === currentWindow && question.inputType === "Radio"){
      return(
        <RadioGroup
        onChange={handleAnswer}
        text={question.questionText}
        options={question.options}
      />
      )
    }

    if(index === currentWindow && question.inputType === "Select"){
      return(
        <Select 
        onChange ={handleAnswer}
        text={question.questionText}
        options={question.options}
      />
      )
    }

    if(index === currentWindow && question.inputType === "Color"){
      return(
        <Colorpicker
        onChange={handleAnswer}
        text={question.questionText}
      /> 
      )
    }
  });
  
return (
<form onSubmit={(event) => submitForm(event)}>
{!surveyStarted && !submitted &&
    <Welcome 
      onChange={startSurvey}
      data={data}
    />
}
{surveyStarted && !submitted && renderQuestions}
{currentWindow === questions.length && <SubmitButton />}
{submitted && <Summary answers={answer}/>}
{surveyStarted && !submitted && <ProgressBar progress={currentWindow}/>}

</form>
)
}

/*Main Compontent in charge of rendering*/ 
export const App = () => {
  return (
    <section className="app-container">
    <Form />
    </section>
  );
};
