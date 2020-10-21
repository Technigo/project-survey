import React from 'react'

import InputName from './InputName'
import InputSelectColor from './InputSelectColor'
import InputAge from './InputAge'
import { Button } from './Button'
import Summary from './Summary'
// Below it should be the survey, question by question
//And when clicking 'next' after each Q, next Q should
//come up, then after last Q, press 'submit' and show 
//summary
const Survey = () => {

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <>
    <section className="survey-wrapper">
    {/* Here I should return form, not in the components */}
      <form onSubmit={handleSubmit}>
        <InputName />
        <InputAge />
        <InputSelectColor />
        <Button button="button" text="Submit"/>
      </form> 
    </section>
    <Summary />
    </>
  )
}
export default Survey