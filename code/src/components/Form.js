import React, { useState } from 'react';
import Header from './Header';
import FormSection from './FormSection';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import InputRadiobutton from './InputRadiobutton';
//import Button from './Button';
import Summary from './Summary';
import Button from './Button';
import ProgressBar from './ProgressBar';
import './Form.scss';

const Form = () => {
  const [question, setQuestion] = useState(-1);
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
  const selectArray = ['', '1-10', '11-20'];
  console.log(selectArray);
  // const item = selectArray.map(([key, value]) => console.log(key, value));
  // console.log(item);

  const radiobuttonArray = ['0-10', '11-20', '21-30'];

  return (
    <section>
      <Header header="Survey" />
      {question === -1 && (
        <FormSection
          className="section"
          buttonFirst={
            <Button type="button" click={nextQuestion} text="Start survey!" />
          }
        />
      )}
      {!showSummary ? (
        <form className="Form" onSubmit={handleSubmit}>
          {question === 0 && (
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

          {question === 1 && (
            <FormSection
              className="section"
              inputType={
                <InputSelect
                  question="What is the select?"
                  array={selectArray}
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

          {question === 2 && (
            <FormSection
              className="section"
              inputType={
                <InputCheckbox
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

          {question === 3 && (
            <FormSection
              className="section"
              inputType={
                <InputRadiobutton
                  question="What is the radiobutton?"
                  array={radiobuttonArray}
                  value={radiobutton}
                  setRadiobutton={setRadiobutton}
                />
              }
              buttonFirst={
                <Button type="button" click={previousQuestion} text="Back" />
              }
              buttonSecond={
                <Button
                  type="button"
                  click={nextQuestion}
                  disabled={!radiobutton}
                  text="Next"
                />
              }
            />
          )}

          {question === 4 && (
            <>
              <Summary
                name={text}
                select={select}
                checkbox={checkbox}
                radiobutton={radiobutton}
              />
              <Button type="button" click={previousQuestion} text="Back" />
              <Button type="submit" text="Send survey" />
            </>
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
        <></>
        // <>
        //   <Summary
        //     name={text}
        //     select={select}
        //     checkbox={checkbox}
        //     radiobutton={radiobutton}
        //   />
        //   <Button type="submit" disabled={!radiobutton} text="Send survey" />
        // </>
      )}
      {question >= 0 && (
        <ProgressBar
          className="ProgressBar"
          progress={question}
          maxProgress="4"
          progressText={`${question} out of 4 answered`}
        />
      )}
    </section>
  );
};

export default Form;
