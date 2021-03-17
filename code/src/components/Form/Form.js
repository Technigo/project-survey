import React, { useState } from 'react';

import WordAssoc from 'components/Cards/WordAssoc';
import Statements from 'components/Cards/Statements';
import Rorschach from 'components/Cards/Rorschach';
import Summary from 'components/Cards/Summary';
import Submission from 'components/Cards/Submission';

const defaultData = {
  answer1: '',
  answer2: '',
  answer3: ''
};

const Form = () => {
  const [formData, setForm] = useState(defaultData);
  const [endState, setEndState] = useState(false);

  const inputProps = { formData, setForm };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEndState(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <p>{formData.answer1}</p> */}
      <WordAssoc {...inputProps} number="1" />
      {/* <p>{formData.answer2}</p> */}
      <Statements {...inputProps} number="2" />
      {/* <p>{formData.answer3}</p> */}
      <Rorschach {...inputProps} number="3" />
      <Submission />
      {endState && (
        <Summary data={formData} />
      )}
    </form>
  );
};

export default Form;
