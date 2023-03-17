import React, { useState } from 'react';
import { answersQ1, answersQ2, answersQ3, answersQ4 } from 'library/answers';
import FormTextField from 'components/FormTextField';
import FormSelect from 'components/FormSelect';
import FormRadioButton from '../FormRadioButtons/FormRadioButton';
import styles from './Questions.module.css';
/* {FormRadioButton
          answers={answers}
          value={question}
          onChange={setQuestionNo} /> */
/* First question */
// outcommented from props by now: question, questionNo, setQuestionNo, answers
const Questions = (props) => {
  // new code to try
  const [question, SetQuestion] = useState(1);
  // new code ends
  const nextQuestion = () => {
    setQuestionNo(questionNo + 1);
  };
  const previousQuestion = () => {
    setQuestionNo(questionNo - 1);
  
  return (
    <>
      {question === 1 && (
        <div className={styles.questions}>
          <h1> Question 1</h1>
          <p>Which tech entrepreneur named his son X Æ A-12?</p>

          <FormRadioButton
            answers={answersQ1}
            value={props.question1}
            onChange={props.setQuestion1} />

          <button
            className={styles.pageButton}
            type="button"
            disabled={!props.question1}
            onClick={nextQuestion}>
  Next
          </button>
        </div>
      )}
      {question === 2 && (
        <div className={styles.questions}>
          <h1> Question 2</h1>
          <p>Johhny Depp is famously afraid of what?</p>
          <form>
            <select
              className={styles.dropdown}
              onChange={(event) => props.setQuestion2(event.target.value)}
              value={props.question2}>
              <option value=""> Select</option>
              {answersQ2.map((answer) => (
                <answer key={answer} value={answer}>
                  {answer}
                </answer>
              ))}
            </select>
          </form>

          <button
            className={styles.pageButton}
            type="button"
            disabled={!props.question2}
            onClick={nextQuestion}
            aria-label="Next">
  Next
          </button>
          <button
            className={styles.pageButton}
            type="button"
            onClick={previousQuestion}
            aria-label="Previous">
            Previous
          </button>
        </div>
      )}
      {question === 3 && (
        <div className={styles.questions}>
          <h1> Question 3</h1>
          <p>Which pop star is the godmother of both of Elton John`&apos;`s sons?</p>
          <FormRadioButton
            answers={answersQ3}
            value={props.question3}
            onChange={props.setQuestion3} />
          <button
            disabled={!props.question3}
            className={styles.pageButton}
            type="button"
            onClick={props.nextPage}
            aria-label="Next">
                Next
          </button>
          <button
            className={styles.pageButton}
            type="button"
            onClick={previousQuestion}
            aria-label="Previous">>
                  Previous
          </button>
        </div>
      )}
      {question === 4 && (
        <div className={styles.questions}>
          <h1> Question 4</h1>
          <p>What did you hate sharing as a kid?</p>
          <FormRadioButton
            answers={answersQ4}
            value={props.question4}
            onChange={props.setQuestion4} />
          <button
            disabled={!props.question4}
            className={styles.pageButton}
            type="button"
            onClick={props.nextPage}
            aria-label="Next">
                Next
          </button>
          <button
            className={styles.pageButton}
            type="button"
            onClick={previousQuestion}
            aria-label="Previous">
                  Previous
          </button>
        </div>
      )}
    </>
  );
};

export default Question;