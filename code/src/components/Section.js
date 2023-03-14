import React from 'react';
import { Question } from './Question'
import { Survey } from './Survey'
import OkButton from './Button'
import { ArrowButtons } from './ArrowButtons'

const questions = [
  'What is your name?', 'How do you feel about working from home?', 'Overall, how do you feel about working from home?', 'What are you finding most difficult?', 'Do you have the following equipment at home?', 'Are you getting the support you need from your manager?']

export const Section = (props) => {
  return (
    <div className="section-container">
      <section className="section" key={props.counter} id={props.counter}>
        <Question question={questions[props.counter - 1]} />
        <Survey
          key={props.counter}
          questionNumber={questions.indexOf(questions[props.counter - 1]) + 1} />
        <OkButton counter={props.counter} setCounter={props.setCounter} name="OK" />
        <ArrowButtons />
      </section>
    </div>
  );
}