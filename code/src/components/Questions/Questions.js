import React, { useState } from 'react';
import RadioButtons from 'components/RadioButtons/Index';
// import SelectDropdown from 'components/SelectDropdown';
import { optionsQ1, optionsQ2, optionsQ3 } from 'lib/questions';
import styles from './Questions.module.css';

const Questions = (props) => {
  const [question, setQuestion] = useState(1);

  const nextQuestion = () => {
    setQuestion(question + 1);
  };
  const previousQuestion = () => {
    setQuestion(question - 1);
  };

  return (
    <>
      {question === 1 && (
        <div className={styles.questions}>
          <h1> Question 1</h1>
          <p>which weapon do you choose in a fight?</p>

          <RadioButtons
            options={optionsQ1}
            value={props.question1}
            onChange={props.setQuestion1}
          />

          <button
            className={styles.pageButton}
            type="button"
            disabled={!props.question1}
            onClick={nextQuestion}
          >
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={styles.questions}>
          <h1> Question 2</h1>
          <p>Which type of schoolkid were you:</p>
          <form>
            <select
              className={styles.dropdown}
              onChange={(event) => props.setQuestion2(event.target.value)}
              value={props.question2}
            >
              <option value=""> Select</option>
              {optionsQ2.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </form>

          <button
            className={styles.pageButton}
            type="button"
            disabled={!props.question2}
            onClick={nextQuestion}
          >
            Next
          </button>
          <button
            className={styles.pageButton}
            type="button"
            onClick={previousQuestion}
          >
            back
          </button>
        </div>
      )}
      {question === 3 && (
        <div className={styles.questions}>
          <h1> Question 3</h1>
          <p>When playing boardgames, are you the one that:</p>
          <RadioButtons
            options={optionsQ3}
            value={props.question3}
            onChange={props.setQuestion3}
          />
          <button
            disabled={!props.question3}
            className={styles.pageButton}
            type="button"
            onClick={props.nextPage}
          >
            Next
          </button>
          <button
            className={styles.pageButton}
            type="button"
            onClick={previousQuestion}
          >
            back
          </button>
        </div>
      )}
    </>
  );
};

export default Questions;
