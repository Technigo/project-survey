import React, { useState } from 'react';
import RadioButtons from 'components/RadioButtons/Index';
// import SelectDropdown from 'components/SelectDropdown';
import styles from './Questions.module.css';

const weapons = ['Bow and Arrow', 'an axe ofc!', 'Magic'];

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
        <div className={styles.Questions}>
          <h1> Question 1</h1>
          <p>If you could use any weapon in the world, which would it be?</p>
          <RadioButtons
            options={weapons}
            value={props.question1}
            onChange={props.setQuestion1}
          />

          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={styles.Questions}>
          <h1> Question 2</h1>
          <p>HALLOJJ</p>
          <form>
            <select
              onChange={(event) => props.setQuestion2(event.target.value)}
              value={props.question2}
            >
              <option value=""> Select location:</option>
              <option value="Test1"> Test1</option>
              <option value="Test2"> Test2</option>
              <option value="Test3"> Test3</option>
            </select>
          </form>

          <button type="button" onClick={nextQuestion}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            back
          </button>
        </div>
      )}
      {question === 3 && (
        <div className={styles.Questions}>
          <h1> Question 3</h1>
          <p>Test 3</p>
          <RadioButtons
            options={['apple', 'orange', 'pear']}
            value={props.question3}
            onChange={props.setQuestion3}
          />
          <button type="button" onClick={props.nextPage}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            back
          </button>
        </div>
      )}
    </>
  );
};

export default Questions;
