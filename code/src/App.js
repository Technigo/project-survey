/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
import React, { useState } from 'react'
import { Header } from './components/Header'
import { Text } from './components/Text'
import { Radio } from './components/Radio'
import { Option } from './components/Option'
import { Summary } from './components/Summary'
import { Footer } from './components/Footer'
import './app.css'

/* Arrays used for radio buttons and select options */
const workExcperiences = ['0-1 years', '2-3 years', '3-5 years', '5-10 years', '> 10 years']
const codeTimes = ['early mornings', 'late nights', 'all day long', 'during REM sleep']
const workModes = ['teamwork', 'individual work', 'a combination of teamwork and individual work']
const frontendFrameworks = ['React.js', 'Angular', 'AngularJS', 'Vue.js', 'jQuery', 'Ember.js', 'Backbone.js']

export const App = () => {
  const [question, setQuestion] = useState(1)
  const nextQuestion = () => setQuestion(question + 1)
  const previousQuestion = () => setQuestion(question - 1)
  const [name, setName] = useState('')
  const [workExperience, setWorkExperience] = useState('')
  const [codeTime, setCodeTime] = useState('')
  const [workMode, setWorkMode] = useState('')
  const [framework, setframework] = useState('')
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

            {question === 1 && (
              <section className="question-c">
                <Text
                  title="Start by entering your name"
                  value={name}
                  setText={setName}
                  placeholder="Enter your name here..." />
                <button type="button" onClick={nextQuestion} disabled={!name}>Next</button>
              </section>
            )}

            {question === 2 && (
              <section className="question-c">
                <fieldset>
                  <h2>How long have you been working with frontend development?</h2>
                  {workExcperiences.map(experience => (
                    <Radio
                      value={experience}
                      name="experience"
                      setSomething={setWorkExperience}
                      checked={workExperience === experience} />
                  ))}
                </fieldset>
                <button type="button" onClick={nextQuestion} disabled={!workExperience}>Next</button>
                <button type="button" onClick={previousQuestion}>Go Back</button>

              </section>
            )}

            {question === 3 && (
              <section className="question-c">
                <fieldset>
                  <h2>When do you prefer to code?</h2>
                  {codeTimes.map(time => (
                    <Radio
                      value={time}
                      name="time"
                      setSomething={setCodeTime}
                      checked={codeTime === time} />
                  ))}
                </fieldset>
                <button type="button" onClick={nextQuestion} disabled={!codeTime}>Next</button>
                <button type="button" onClick={previousQuestion}>Go Back</button>
              </section>
            )}

            {question === 4 && (
              <section className="question-c">
                <label htmlFor="teamwork">
                  <h2>Does teamwork make the dream work?</h2>
                  <div className="drop-down">
                    <select
                      id="teamwork"
                      value={workMode}
                      onChange={event => setWorkMode(event.target.value)}
                      required>
                      <option value="">select</option>
                      {workModes.map(mode => (
                        <Option value={mode} text={mode} />
                      ))}
                    </select>
                  </div>
                </label>
                <button type="button" onClick={nextQuestion} disabled={!setCodeTime}>Next</button>
                <button type="button" onClick={previousQuestion}>Go Back</button>
              </section>
            )}

            {question === 5 && (
              <label htmlFor="framework">
                <h2>Which framework do you prefer the most?</h2>
                <div className="drop-down">
                  <select
                    id="framework"
                    value={framework}
                    onChange={event => setframework(event.target.value)}
                    required>
                    <option value="">select</option>
                    {frontendFrameworks.map(frontendFramework => (
                      <Option value={frontendFramework} text={frontendFramework} />
                    ))}
                  </select>
                </div>
                <button type="submit" onClick={nextQuestion} disabled={!framework}>Submit</button>
                <button type="button" onClick={previousQuestion}>Go Back</button>
              </label>
            )}

          </form>
        )}

        <section className="summary-wrapper">
          {submit &&
            <div className="summary-content">

              <Summary
                name={name}
                experience={workExperience}
                time={codeTime}
                work={workMode}
                framework={framework} />

              <div className="summary-buttons">
                <button type="button" onClick={() => window.location.reload()}>Reset</button>
                <button type="button" onClick={() => setSubmit(false)}>Go back</button>
              </div>

            </div>}
        </section>

      </section>

      <Footer />

    </section>
  )
}
