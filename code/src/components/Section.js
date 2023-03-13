import React from 'react';
import { Question } from './Question'
import { Survey } from './Survey'
import { Button } from './Button'
import { ArrowButtons } from './ArrowButtons'

const questions = [
  'What is your name?', 'How do you feel about working from home?', 'Overall, how do you feel about working from home?', 'What are you finding most difficult?', 'Do you have the following equipment at home?', 'Are you getting the support you need from your manager?']

export const Section = () => {
  return (
    <div>
      {questions.map((question) => {
        return (
          <section className="section" key={questions.indexOf(question) + 1} id={`question${questions.indexOf(question) + 1}`}>
            <Question question={question} />
            <Survey id={`question${questions.indexOf(question) + 1}`} />
            <Button name="OK" />
            <ArrowButtons />
          </section>
        )
      })}
    </div>
  );
}