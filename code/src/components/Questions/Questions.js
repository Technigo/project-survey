import React, { useState } from 'react';
import RadioButtons from 'components/RadioButtons/Index';
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
    <div className="main-container">
      {question === 1 && (
        <div className={styles.Questions}>
          <h1> Question 1</h1>
          <p>Lalalalalla</p>
          <RadioButtons />
          <button type="button" onClick={nextQuestion}>
            Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={styles.Questions}>
          <h1> Question 2</h1>
          <p>HALLOJJ</p>
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
          <button type="button" onClick={props.nextPage}>
            Next
          </button>
          <button type="button" onClick={previousQuestion}>
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default Questions;
