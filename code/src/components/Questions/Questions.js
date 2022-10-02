import React, { useState } from 'react';
import RadioButtons from 'components/RadioButtons/Index';
// import SelectDropdown from 'components/SelectDropdown';
import styles from './Questions.module.css';

const options = [
  'Bow and Arrow',
  'an axe ofc!',
  'Let others fight for you',
  'Magic'
];

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
            options={options}
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
              <option value="The one with good grades">
                The one with good grades
              </option>
              <option value="Spending most of the time at the gym">
                Spending most of the time at the gym
              </option>
              <option value="Library is were you find me">
                Library is were you find me
              </option>
              <option value="Favorite place:Smoking area">
                Favorite place:Smoking area
              </option>
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
            options={[
              'Often wins',
              'Is skeptical and thinks everyone else is cheating',
              'Do not want to cheat but cant help to do so',
              'Just happy to play'
            ]}
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
