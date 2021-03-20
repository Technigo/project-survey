import React, { useState } from 'react'

import Summary from './Summary'
import InputRadioButton from 'components/InputRadioButton'
import Button from 'components/Button'
import InputDropDown from 'components/InputDropDown'
import InputText from 'components/InputText'
import InputCheckBox from 'components/InputCheckBox'
import InputCheckBoxGroup from 'components/InputCheckBoxGroup'

const Survey = () => {
  
  //STATES

  const [question, setQuestion] = useState(0)
  const [enjoyReading, setEnjoyReading] = useState('')
  const [readingFormat, setReadingFormat] = useState('')
  const [book, setBook] = useState ('')
  const [isChecked, setIsChecked] = useState(false)
  const [checkboxGroup, setCheckboxGroup] = useState([])
  const [showSummary, setShowSummary] = useState(false)
  //const [errorMessage, setErrorMessage] = useState('')

  //VARIABLES

  const enjoyReadingArray = ['I enjoy reading a lot', 'I like reading sometimes', 'I do not like reading']
  const checkboxGroupArray = ['Adventure', 'Classics', 'Detective', 'Fantasy', 'History', 'Romance', 'Science Fiction', 'Poetry', 'Self-Help', 'Other']

  //FUNCTIONS

  // This function leads to the next question
  const onNextQuestionChange = () => {
    setQuestion(question + 1)
  }
  // const onNextQuestionChange = () => {
  //   if (enjoyReading !== '') {
  //     setQuestion(question + 1)
  //   } else {
  //     setErrorMessage('This field is required')
  //   }
  // }

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
  const onIsCheckedChange = event => setIsChecked(event.target.checked)

  // This function will update the value of an array/answer for the fifth question (checkbox group input)
  const onCheckboxGroupToggle =(checkboxValue) => {
    if (checkboxGroup.includes(checkboxValue)) {
      // delete element from array by using filter method
      setCheckboxGroup(checkboxGroup.filter(item => item !== checkboxValue))
    } else {
      // add element to array. Spread operator (...) will copy all the values from the previous heckboxGroup array 
      setCheckboxGroup([checkboxValue, ...checkboxGroup])
    }
  }


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
            <p className='small-text'>Time to complete: 10 minutes</p>
            <div className="start-button-container">
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Start the survey'} className={'start-button'} />
            </div>
          </section>
        )}

        {/* First question */}
        {question === 1 && (
          <section className='question-container'>
            <h2 className='question'>How much do you enjoy reading?</h2>
            <div className="radio-buttons">
              {
                enjoyReadingArray.map(item =>
                  <InputRadioButton 
                    item={item} 
                    onEnjoyReadingChange={onEnjoyReadingChange} 
                  />
                )
              }
            </div>
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} className={'button'} />
            </div>
          </section>
        )}

        {/* Second question */}
        {question === 2 && (
          <section className='question-container'>
            <InputDropDown 
              question={'Which format do you prefer reading the most?'}
              dropDownvalue={readingFormat}
              onChangeFunction={onReadingFormatChange}
            />
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} className={'button'} />
            </div>
          </section>
        )}

        {/* Third question */}
        {question === 3 && (
          <section className='question-container'>
            <InputText 
              question={'What is your favorite book?'}
              inputTextValue={book}
              onChangeFunction={onBookChange}
            />
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} className={'button'} />
            </div>
          </section>
        )}

        {/* Fourth question */}
        {question === 4 && (
          <section className='question-container'>
            <InputCheckBox 
              question={'Check this box if you agree to add your favorite book to our list of recommended books.'}
              onChangeFunction={onIsCheckedChange}
              isChecked={isChecked}
            />
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} className={'button'} />
            </div>
          </section>
        )}

        {/* Fifth question */}
        {question === 5 && (
          <section className='question-container'>
            <h2 className='question'>What types of books do you read most often?</h2>
            <div className="checkbox-group-container">
              {
                checkboxGroupArray.map(genre => 
                  <InputCheckBoxGroup 
                    genre={genre}
                    onChangeFunction={onCheckboxGroupToggle}
                    checkboxGroup={checkboxGroup}
                  />
                )
              }
            </div>
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <Button onChangeDirection={onNextQuestionChange} textDisplay={'Continue'} className={'button'} />
            </div>
          </section>
        )}

        {/* Submit page */}
        {question === 6 && (
          <section className='question-container'>
            <h2 className='header'>Ready to submit?</h2>
            <div className="button-container">
              <Button onChangeDirection={onPreviousQuestionChange} textDisplay={'Go Back'} className={'button'} />
              <button 
                onSubmit={handleSubmit} 
                className='submit-button' 
                type='submit'>
                  Submit
              </button>
            </div>
          </section>
        )}
      </form>
      ): (
        //This will show the summary of answers if the form is submitted
        <div className="summary-container">
          <Summary 
            enjoyReading={enjoyReading}
            readingFormat={readingFormat}
            book={book}
            isChecked={isChecked}
            checkboxGroup={checkboxGroup}
          />
        </div>
      )}
    </main>
  )
}

export default Survey