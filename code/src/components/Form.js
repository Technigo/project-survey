import React, { useState } from 'react';
import FormSection from './FormSection';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import InputRadiobutton from './InputRadiobutton';
//import Button from './Button';
import Summary from './Summary';
import Button from './Button';
import ProgressBar from './ProgressBar';

const Form = () => {
  const [question, setQuestion] = useState(0);
  const [text, setText] = useState('');
  const [select, setSelect] = useState('');
  const [radiobutton, setRadiobutton] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  const nextQuestion = () => setQuestion(question + 1);
  const previousQuestion = () => setQuestion(question - 1);
  //const progressBar = () =>

  const radiobuttonArray = ['0-10', '11-20', '21-30'];
  // const input = [
  //   <>
  //     <InputText />
  //     <InputSelect />
  //     <InputCheckbox />
  //     <InputRadiobutton />
  //   </>,
  // ];

  return (
    <main>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          {question === 0 && (
            <FormSection
              className="section"
              buttonFirst={
                <Button
                  type="button"
                  click={nextQuestion}
                  text="Start survey!"
                />
              }
            />
          )}
          {question === 1 && (
            <FormSection
              className="section"
              inputType={
                <InputText
                  id="name"
                  question="What is the question?"
                  value={text}
                  setText={setText}
                />
              }
              buttonFirst={
                <Button type="button" click={previousQuestion} text="Back" />
              }
              buttonSecond={
                <Button
                  type="button"
                  click={nextQuestion}
                  disabled={!text}
                  text="Next"
                />
              }
            />
          )}

          {question === 2 && (
            <FormSection
              className="section"
              inputType={
                <InputSelect
                  id="name"
                  question="What is the select?"
                  value={select}
                  setSelect={setSelect}
                />
              }
              buttonFirst={
                <Button type="button" click={previousQuestion} text="Back" />
              }
              buttonSecond={
                <Button
                  type="button"
                  click={nextQuestion}
                  disabled={!select}
                  text="Next"
                />
              }
            />
          )}

          {question === 3 && (
            <FormSection
              className="section"
              inputType={
                <InputCheckbox
                  id="name"
                  question="What is the checkbox?"
                  value={checkbox}
                  setCheckbox={setCheckbox}
                />
              }
              buttonFirst={
                <Button type="button" click={previousQuestion} text="Back" />
              }
              buttonSecond={
                <Button type="button" click={nextQuestion} text="Next" />
              }
            />
          )}

          {question === 4 && (
            <FormSection
              className="section"
              inputType={
                <InputRadiobutton
                  id="name"
                  question="What is the radiobutton?"
                  array={radiobuttonArray}
                  value={radiobutton}
                  setRadiobutton={setRadiobutton}
                />
              }
              buttonFirst={
                <Button
                  type="submit"
                  disabled={!radiobutton}
                  text="Send survey"
                />
              }
            />
          )}
          {question > 0 && (
            <ProgressBar
              className="progressBar"
              progress={question - 1}
              maxProgress="5"
              progressText={`${question - 1} out of 5 answered`}
            />
          )}

          {/* <InputText
            id="name"
            question="What is the question?"
            value={text}
            setText={setText}
          />
          {console.log()}
          <InputSelect
            id="name"
            question="What is the select?"
            value={select}
            setSelect={setSelect}
          />
          <InputCheckbox
            id="name"
            question="What is the checkbox?"
            value={checkbox}
            setCheckbox={setCheckbox}
          />
          <InputRadiobutton
            id="name"
            question="What is the radiobutton?"
            array={radiobuttonArray}
            value={radiobutton}
            setRadiobutton={setRadiobutton}
          /> */}
          {/* <Button /> */}

          {/* <button type="submit" disabled={!text}>
            Submit
          </button> */}
        </form>
      ) : (
        <Summary
          name={text}
          select={select}
          checkbox={checkbox}
          radiobutton={radiobutton}
        />
      )}
    </main>
  );
};

export default Form;
