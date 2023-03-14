import React from 'react';
import { Question } from './Question'
import { Answer } from './Answer'
import OkButton from './Button'
import { ArrowButtons } from './ArrowButtons'

const questions = [
  'What is your name?', 'How do you feel about working from home?', 'What are you finding most difficult?', 'Do you have the following equipment at home?', 'Are you getting the support you need from your manager?']

export const Section = (props) => {
  return (
    <div className="section-container">
      <section className="section" key={props.counter} id={props.counter}>
        <Question question={questions[props.counter - 1]} />
        <Answer
          key={props.counter}
          questionNumber={props.counter}
          name={props.name}
          setName={props.setName}
          mood={props.mood}
          setMood={props.setMood}
          difficulties={props.difficulties}
          setDifficulties={props.setDifficulties}
          equipment={props.equipment}
          setEquipment={props.setEquipment}
          support={props.support}
          setSupport={props.setSupport} />
        <OkButton counter={props.counter} setCounter={props.setCounter} name="OK" />
        <ArrowButtons />
      </section>
    </div>
  );
}