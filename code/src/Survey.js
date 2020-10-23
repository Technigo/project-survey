import React, { useState } from 'react'

import Header from './Header'
import InputName from './InputName'
import InputSelectColor from './InputSelectColor'
import InputAge from './InputAge'
import { Button } from './Button'
import Summary from './Summary'
// Below it should be the survey, question by question
//And when clicking 'next Q' after each Q, next Q should
//come up, then after last Q, press 'submit' and show 
//summary
const Survey = () => {
  const [name, setName] = useState(''); //Name input
  const [ageGroup, setAgeGroup] = useState(); //Agegroup-radiobutton
  const [color, setColor] = useState(''); //Color select-dropdown 
  
  const handleSubmit = event => { //To prevent that page reloads on submit
    event.preventDefault();
  };
  const ageGroups = ["20-24", "25-29", "30-34", "35-39", "40-44", "45+"];

  return (
    <>
    <Header/>
    <Button button="button" text="Start survey"/>
    <section className="survey-wrapper">
      <form onSubmit={handleSubmit}>
        
        <article className="question-wrapper">
          <InputName
            question="What is your name?"
            value={name}
            setName={setName} />
          <Button button="button" text="next question"/>
        </article>

        <article className="question-wrapper"> 
          <InputAge
            question="What is your age?"
            array={ageGroups}
            ageGroup={ageGroup}
            setAgeGroup={setAgeGroup}
          />
          <Button button="button" text="previous question"/>
          <Button button="button" text="next question"/>
        </article>

        <article className="question-wrapper">  
          <InputSelectColor
            question="What is your favorite color?"
            value={color}
            setColor={setColor}
          />
          <Button button="button" text="previous question"/>
          <Button button="button" text="Submit"/>
        </article>
      </form> 
    </section>
    <Summary 
      heading="Summary"
    />
    </>
  );
};
export default Survey