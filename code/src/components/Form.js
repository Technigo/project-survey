import React, { useState } from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import InputCheckbox from './InputCheckbox';
import InputRadiobutton from './InputRadiobutton';
//import Button from './Button';
import Summary from './Summary';

const Form = () => {
  const [text, setText] = useState('');
  const [select, setSelect] = useState('');
  const [radiobutton, setRadiobutton] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };
  return (
    <>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <InputText id="name" name={text} setText={setText} />
          {console.log()}
          <InputSelect value={select} setSelect={setSelect} />
          <InputCheckbox value={checkbox} setCheckbox={setCheckbox} />
          <InputRadiobutton
            value={radiobutton}
            setRadiobutton={setRadiobutton}
          />
          {/* <Button /> */}
          <button type="submit" disabled={text === ''}>
            Submit
          </button>
        </form>
      ) : (
        <Summary
          name={text}
          select={select}
          checkbox={checkbox}
          radiobutton={radiobutton}
        />
      )}
    </>
  );
};

export default Form;
