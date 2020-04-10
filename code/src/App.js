/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { Radio } from './components/Radio'
import { Select } from './components/Select'
import { Button } from './components/Button'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'
import './app.css'
import Image1 from './assets/image-question.jpg'
import Image2 from './assets/image-summary.jpg'

/* Arrays used for radio buttons and select options */
const workExperiences = ['0-1 years', '2-3 years', '3-5 years', '5-10 years', '> 10 years']
const codeTimes = ['early mornings', 'late nights', 'all day long', 'during REM sleep']
const workModes = ['teamwork', 'individual work', 'a combination of teamwork and individual work']
const frontendFrameworks = ['React.js', 'Angular', 'AngularJS', 'Vue.js', 'jQuery', 'Ember.js', 'Backbone.js']

export const App = () => {
  const [question, setQuestion] = useState(0)
  const nextQuestion = () => setQuestion(question + 1)
  const previousQuestion = () => setQuestion(question - 1)
  const [name, setName] = useState('')
  const [workExperience, setWorkExperience] = useState('')
  const [codeTime, setCodeTime] = useState('')
  const [workMode, setWorkMode] = useState('')
  const [framework, setFramework] = useState('')
  const [submit, setSubmit] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true)
  }

  return (
    <section className="content-wrapper">
      <Header />
      <section className="main-container">

        {!submit && (
          <form onSubmit={handleSubmit}>
            <img className="image-1" src={Image1} alt="woman and man looking puzzled" />

            {question === 0 && (
              <section className="introduction">
                <h2 className="intro-heading">Welcome to the think blue. frontend survey</h2>
                <div className="navigation-buttons">
                  <Button button="button" click={nextQuestion} text="Start" />
                </div>
              </section>
            )}

            {question === 1 && (
              <section className="question-container">
                <Text
                  id="name"
                  question="Start by entering your name"
                  value={name}
                  setText={setName}
                  placeholder="Enter your name here..." />
                <div className="navigation-buttons">
                  <Button button="button" click={nextQuestion} disabled={!name} text="Next" />
                </div>
              </section>
            )}

            {question === 2 && (
              <section className="question-container">
                <Radio
                  question="How long have you been working with frontend development?"
                  array={workExperiences}
                  setState={setWorkExperience}
                  state={workExperience} />
                <div className="navigation-buttons">
                  <Button button="button" click={nextQuestion} disabled={!workExperience} text="Next" />
                  <Button button="button" click={previousQuestion} text="Go back" />
                </div>
              </section>
            )}

            {question === 3 && (
              <section className="question-container">
                <Radio
                  question="When do you prefer to code?"
                  array={codeTimes}
                  setState={setCodeTime}
                  state={codeTime} />
                <div className="navigation-buttons">
                  <Button button="button" click={nextQuestion} disabled={!codeTime} text="Next" />
                  <Button button="button" click={previousQuestion} text="Go back" />
                </div>
              </section>
            )}

            {question === 4 && (
              <section className="question-container">
                <Select
                  id="teamwork"
                  question="Does teamwork make the dream work?"
                  state={workMode}
                  setState={setWorkMode}
                  array={workModes} />
                <div className="navigation-buttons">
                  <Button button="button" click={nextQuestion} disabled={!workMode} text="Next" />
                  <Button button="button" click={previousQuestion} text="Go back" />
                </div>
              </section>
            )}

            {question === 5 && (
              <section className="question-container">
                <Select
                  id="framework"
                  question="Which framework do you prefer the most?"
                  state={framework}
                  setState={setFramework}
                  array={frontendFrameworks} />
                <div className="navigation-buttons">
                  <Button button="submit" click={handleSubmit} disabled={!framework} text="Next" />
                  <Button button="button" click={previousQuestion} text="Go back" />
                </div>
              </section>
            )}
          </form>
        )}

        {submit && (
          <section className="summary-wrapper">

            <div className="summary-content">
              <img className="image-2" src={Image2} alt="superhero woman" />

              <div className="summary-result">
                <Summary
                  name={name}
                  experience={workExperience}
                  time={codeTime}
                  work={workMode}
                  framework={framework} />

                <div className="navigation-buttons">
                  <Button button="button" click={() => window.location.reload()} text="Reset" />
                  <Button button="button" click={() => setSubmit(false)} text="Go back" />
                </div>
              </div>

            </div>
          </section>
        )}

      </section>
      <Footer />
    </section>
  )
}
