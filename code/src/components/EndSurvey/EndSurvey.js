import React from 'react';
import { answersQ1 } from 'lib/questions';
import styles from './EndSurvey.module.css';

const EndSurvey = (props) => {
  let yourPersonality;
  if (props.question1 === answersQ1[0]) {
    yourPersonality = 'Stubborn!';
  } else if (props.question1 === answersQ1[1]) {
    yourPersonality = 'Happy!';
  } else if (props.question1 === answersQ1[2]) {
    yourPersonality = 'Quiet!';
  } else if (props.question1 === answersQ1[3]) {
    yourPersonality = 'Outgoing!';
  }

  return (
    <div className="survey-wrapper">
      <div className={styles.end}>
        <p>Which tech entrepreneur named his son X Æ A-12: </p>
        <span className={styles.answer}>{props.question1}</span>
        <p>Johhny Depp is famously afraid of what: </p>
        <span className={styles.answer}>{props.question2}</span>
        <p>Which pop star is the godmother of both of Elton John`&apos;`s sons: </p>
        <span className={styles.answer}>{props.question3}</span>
        <p>What did you hate sharing as a kid?: </p>
        <span className={styles.answer}>{props.question4}</span>
        <p className={styles.yourPersonality}> {props.name}, You have this personality:</p>
        <span className={styles.finalPersonality}>{yourPersonality}</span>
      </div>
    </div>
  );
};

export default EndSurvey;