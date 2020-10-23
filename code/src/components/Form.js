import React, { useState } from 'react';

import InputText from './InputText';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import InputRadiobutton from './InputRadiobutton';
import Summary from './Summary';
import Button from './Button';
import ProgressBar from './ProgressBar';
import '../styles/Form.scss';

const Form = () => {
  const [pageIndex, setPageIndex] = useState(-1);
  const [text, setText] = useState('');
  const [select, setSelect] = useState('');
  const [radiobutton, setRadio] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmit(true);
  };
  //const nextQuestion = () => setPageIndex(pageIndex + 1);
  const previousQuestion = () => setPageIndex(pageIndex - 1);
  const handleTextChange = event => {
    setText(event.target.value);
  };
  const handleSelectChange = event => {
    setSelect(event.target.value);
  };
  const handleRadioChange = event => {
    setRadio(event.target.value);
  };
  const handleCheckboxChange = event => {
    setCheckbox(event.target.value);
  };
  const onNextPageChange = () => {
    setPageIndex(pageIndex + 1);
    // if (text === 'Start') {

    // }
    // console.log('Hello!');
  };
  const onPreviousPageChange = () => {
    setPageIndex(pageIndex - 1);
  };
  const onSubmit = () => {
    window.location.reload();
  };

  const selectArray = ['', '1-10', '11-20'];
  const radiobuttonArray = ['0-10', '11-20', '21-30'];
  const questions = {
    text: 'What is the text input?',
    select: 'What is the select?',
    checkbox: 'What is the checkbox?',
    radio: 'What is the radiobutton?',
    summary: 'Summary',
  };
  console.log(text);
  console.log(select);
  return (
    <main className="App__main">
      {!submit ? (
        <form className="Form" onSubmit={handleSubmit}>
          <h1 className="App__header">Excellent survey</h1>
          {pageIndex === -1 && (
            <section className="Form__section">
              <h2 className="App__subheader">
                Thank you for participating in the survey. It is very important.
              </h2>
              <Button
                className="Button"
                type="button"
                click={onNextPageChange}
                text="Start"
                icon={
                  <i className="Button__i Button__i--right fa fa-arrow-right"></i>
                }
              />
            </section>
          )}
          {pageIndex === 0 && (
            <section className="Form__section">
              <InputText
                classLabel=""
                classInput="Form__text"
                question={questions.text}
                value={text}
                onTextChange={handleTextChange}
              />
              <div className="Button-container">
                <Button
                  className="Button Button--reverse"
                  type="button"
                  click={onPreviousPageChange}
                  text="Go Back"
                  icon={
                    <i className="Button__i Button__i--left fa fa-arrow-left"></i>
                  }
                />
                <Button
                  className="Button"
                  type="button"
                  click={onNextPageChange}
                  disabled={!text}
                  text="Proceed"
                  icon={
                    <i className="Button__i Button__i--right fa fa-arrow-right"></i>
                  }
                />
              </div>
            </section>
          )}

          {pageIndex === 1 && (
            <section className="Form__section">
              <InputSelect
                className="Form__label-select"
                question={questions.select}
                array={selectArray}
                value={select}
                onSelectChange={handleSelectChange}
              />
              <div className="Button-container">
                <Button
                  className="Button Button--reverse"
                  type="button"
                  click={onPreviousPageChange}
                  text="Go Back"
                  icon={
                    <i className="Button__i Button__i--left fa fa-arrow-left"></i>
                  }
                />
                <Button
                  className="Button"
                  type="button"
                  click={onNextPageChange}
                  disabled={!select}
                  text="Proceed"
                  icon={
                    <i className="Button__i Button__i--right fa fa-arrow-right"></i>
                  }
                />
              </div>
            </section>
          )}
          {pageIndex === 2 &&
            (select === '1-10' ? (
              <section className="Form__section">
                <InputCheckbox
                  classLabel="Form__label"
                  classInput="Form__input-checkbox"
                  question={questions.checkbox}
                  checkbox={checkbox}
                  onCheckboxChange={handleCheckboxChange}
                  classSpan="Form__input Form__input-checkbox"
                />
                <div className="Button-container">
                  <Button
                    className="Button Button--reverse"
                    type="button"
                    click={onPreviousPageChange}
                    text="Go Back"
                    icon={
                      <i className="Button__i Button__i--left fa fa-arrow-left"></i>
                    }
                  />
                  <Button
                    className="Button"
                    type="button"
                    click={onNextPageChange}
                    text="Proceed"
                    icon={
                      <i className="Button__i Button__i--right fa fa-arrow-right"></i>
                    }
                  />
                </div>
              </section>
            ) : (
              <section className="Form__section">
                <InputRadiobutton
                  classLabel="Form__label"
                  question={questions.radio}
                  array={radiobuttonArray}
                  value={radiobutton}
                  onRadioChange={handleRadioChange}
                  classSpan="Form__input Form__input-radio"
                />
                <div className="Button-container">
                  <Button
                    className="Button Button--reverse"
                    type="button"
                    click={onPreviousPageChange}
                    text="Go Back"
                    icon={
                      <i className="Button__i Button__i--left fa fa-arrow-left"></i>
                    }
                  />
                  <Button
                    className="Button"
                    type="button"
                    click={onNextPageChange}
                    disabled={!radiobutton}
                    text="Proceed"
                    icon={
                      <i className="Button__i Button__i--right fa fa-arrow-right"></i>
                    }
                  />
                </div>
              </section>
            ))}

          {pageIndex === 3 && (
            <section className="Form__section">
              <Summary
                className="Form__label"
                header={questions.summary}
                name={text}
                select={select}
                checkbox={checkbox}
                radiobutton={radiobutton}
              />
              <div className="Button-container">
                <Button
                  className="Button Button--reverse"
                  type="button"
                  click={onPreviousPageChange}
                  text="Go Back"
                  icon={
                    <i className="Button__i Button__i--left fa fa-arrow-left"></i>
                  }
                />
                <Button className="Button" type="submit" text="Send survey" />
              </div>
            </section>
          )}
          {pageIndex >= 0 && (
            <section className="Form__section">
              <ProgressBar
                className="ProgressBar"
                progress={pageIndex}
                maxProgress="3"
                progressText={`${pageIndex} out of 3 answered`}
              />
            </section>
          )}
        </form>
      ) : (
        <section className="Form__section">
          <h2>Good bye</h2>
          <Button
            className="Button"
            type="button"
            click={onSubmit}
            text="Home"
          />
        </section>
      )}
    </main>
  );
};

export default Form;
