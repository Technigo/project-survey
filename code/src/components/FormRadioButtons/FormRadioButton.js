/* eslint-disable max-len */
import React from 'react';
import styles from './FormRadioButtons.module.css';

const handleChange = (event) => {
  console.log(event.target.value);
  // get data from radio buttons
  // save with setAndTheNameYouWantToCallIt
  // ...
  // changed from "answers" to "props" - the orange letters below
}
const FormRadioButton = ({ props }) => {
  console.log(props.question2);
  console.log('props', props);

  return (
    <React.Fragment>
<form className={styles.radioButtons}>
  {props.answers.map((answer) => (
<label className={styles.label} key={answer} htmlFor={answer}
          input
            id={answer}
            name={answer}
            type="radio"
            value={answer}
            onChange={(event) => props.onChange(event.target.value)}
            checked={props.value === answer}
            />
          {answer}
        </label>
        </form>
  ))};

export default FormRadioButton;