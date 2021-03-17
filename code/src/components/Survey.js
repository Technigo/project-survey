import React, { useState } from 'react'

import Summary from './Summary'
import InputRadioButton from 'components/InputRadioButton'
import Button from 'components/Button'

const Survey = () => {
  
  //STATES

  const [question, setQuestion] = useState(0)
  const [enjoyReading, setEnjoyReading] = useState('')
  const [readingFormat, setReadingFormat] = useState('')
  const [book, setBook] = useState ('')
  const [isChecked, setIsChecked] = useState(false)
  const [showSummary, setShowSummary] = useState(false)

  //VARIABLES

  const enjoyReadingArray = ['I enjoy reading a lot', 'I like reading sometimes', 'I do not like reading']

  //FUNCTIONS

  // This function leads to the next question
  const onNextQuestionChange = () => setQuestion(question + 1)

  // This function goes back to the previous question
  const onPreviousQuestionChange = () => setQuestion(question - 1)

  //This function will show the summary of answers and prevet the page from refreshing on submit form
  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }
  
  // This function stores the answer from the first question (radio input)
  const onEnjoyReadingChange = event => setEnjoyReading(event.target.value)

  // This function stores the answer from the second question (select input)
  const onReadingFormatChange = event => setReadingFormat(event.target.value)

  // This function stores the answer from the third question (text input)
  const onBookChange = event => setBook(event.target.value)

  // This function stores the answer from the fourth question (checkbox input)
  const onIsCheckedChange = (event) => setIsChecked(event.target.checked)

  //RENDERING

  return (
    <main className='main-container'>
      {/*This will show the the questions if the form is not submitted*/}
      {!showSummary ? (
      <form className='form' onSubmit={handleSubmit}>

        {/* Survey starts here  */}
        {question === 0 && (
          <section className='start-page'>
          <h1 className='header'>READING HABITS SURVEY</h1>
          <p>Time to complete: 10 minutes</p>
          <div className="start-button-container">
            <button 
              onClick={onNextQuestionChange} 
              className='start-button' 
              type='button'>
                Tell us about your reading habits
            </button>
            <p className='small-text'>click the <span className='highlight'>Button</span></p>
          </div>
        </section>
        )}

        {/* First question */}
        {question === 1 &&(
          <section className='question'>
            <h2>How much do you enjoy reading?</h2>
            {
              enjoyReadingArray.map(item =>
                <InputRadioButton item={item} onEnjoyReadingChange={onEnjoyReadingChange} />
              )
            }
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} />
            </div>
          </section>
        )}

        {/* Second question */}
        {question === 2 &&(
          <section className='question'>
              <label>
                <h2>Which format do you prefer reading the most?</h2>
                <select value={readingFormat} onChange={onReadingFormatChange}>
                    <option disabled></option>
                    <option value="Electronic">Electronic</option>
                    <option value="Print">Print</option>
                    <option value="Audio Books">Audio books</option>
                    <option value="No preference">No preference</option>
                </select>
              </label>
            <div className="button-container">
            <button 
              onClick={onPreviousQuestionChange} 
              className='continue-button' 
              type='button'>
                Go Back
            </button>
            <button 
              onClick={onNextQuestionChange} 
              className='continue-button' 
              type='button'>
                Continue
            </button>
          </div>
          </section>
        )}

        {/* Third question */}
        {question === 3 &&(
          <section className='question'>
              <label htmlFor={book}>
                <h2>What is your favorite book?</h2>
                <input
                  type='text'
                  id={book}
                  value={book}
                  onChange={onBookChange}
                />
              </label>
            <div className="button-container">
            <button 
              onClick={onPreviousQuestionChange} 
              className='continue-button' 
              type='button'>
                Go Back
            </button>
            <button 
              onClick={onNextQuestionChange} 
              className='continue-button' 
              type='button'>
                Continue
            </button>
          </div>
          </section>
        )}

        {/* Fourth question */}
        {question === 4 &&(
          <section className='question'>
              <label htmlFor='check'>
              <h2>Check this box if you agree to add your favorite book to our list of recommended books.</h2>
                <input
                  type='checkbox'
                  id='check'
                  onChange={onIsCheckedChange}
                  checked={isChecked}
                />
              </label>
            <div className="button-container">
            <button 
              onClick={onPreviousQuestionChange} 
              className='continue-button' 
              type='button'>
                Go Back
            </button>
            <button 
              onClick={onNextQuestionChange} 
              className='continue-button' 
              type='button'>
                Continue
            </button>
          </div>
          </section>
        )}

        {/* Submit page */}
        {question === 5 && (
          <section className='sumbit-page'>
          <h2 className='header'>Ready to submit?</h2>
            <button 
              onSubmit={handleSubmit} 
              className='submit-button' 
              type='submit'>
                Submit
            </button>
        </section>
        )}
      </form>
      ): (
        //This will show the summary of answers if the form is submitted
        <Summary 
          enjoyReading={enjoyReading}
          readingFormat={readingFormat}
          book={book}
          isChecked={isChecked}
        />
      )}
    </main>
  )
}

export default Survey