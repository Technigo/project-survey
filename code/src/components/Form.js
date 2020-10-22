import React from 'react'

import Header from "./Header"
import Question1 from "./Question1"
import Question2 from "./Question2"
import Question3 from "./Question3"
import Submit from "./Submit"

import "./form.css"

// const dropDownOptionsArr = ["0-10 km", "20-50 km", "50+ km"];

export const Form = () => {
  return (
    <div className="app-container">
      <Header title="We like to move it!" subtitle="your favourite moving company" />
      <Question1 question="Where do you live?" />
      <Question2 question="How far are you moving?" options={dropDownOptionsArr} />
      <Question3 question="Do you want to order our cleaning service as well?" />
      <Submit text="Submit" />
      {/* <Footer /> */}
    </div>
  )
}

export default Form; 
