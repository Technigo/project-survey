import React from 'react'
import "./app.css"
import Question1 from "./components/Question1"
import Question2 from "./components/Question2"
import Question3 from "./components/Question3"

const dropDownOptionsArr = ["0-10 km", "20-50 km", "50+ km"];

export const App = () => {
  return (
    <div className="app-container">
      <Question1 question="Where do you live?" />
      <Question2 question="How far are you moving?" options={dropDownOptionsArr} />
      <Question3 question="Do you want to order our cleaning service as well?" />
      <Submit />
    </div>
  )
}

export default App; 
