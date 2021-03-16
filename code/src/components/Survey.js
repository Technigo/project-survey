import React, { useState } from 'react'

const Survey = () => {
  
  //STATES

  const [question, setQuestion] = useState(0)
  const [enjoyReading, setEnjoyReading] = useState('')
  const [genres, setGenres] = useState('')
  const [readingFormat, setReadingFormat] = useState('')
  const [book, setBook] = useState ('')

  //VARIABLES

  const enjoyReadingArray = ['I enjoy reading a lot', 'I like reading sometimes', 'I do not like reading']
  const genresArray = ['Science', 'Action and Adventure', 'Classics', 'Comic Book or Graphic Novel', 'Detective and Mystery', 'Biographies and Autobiographies', 'Historical Fiction', 'Fantasy', 'Self-Help', 'Other']

  //FUNCTIONS

  // This function leads to the next question
  const onNextQuestionChange = () => setQuestion(question + 1)

  // This function goes back to the previous question
  const onPreviousQuestionChange = () => setQuestion(question - 1)

  //This function will prevet the page from refreshing on submit form
  const onSubmit = event => {
    event.preventDefault()
  }
  
  // This function stores the answer from the first question (radio input)
  const onRadioChange = event => setEnjoyReading(event.target.value)

  // This function stores the answer from the second question (checkbox input)
  const onGenresChange = (event) => setGenres(event.target.checked)

  // This function stores the answer from the third question (select input)
  const onReadingFormatChange = event => setReadingFormat(event.target.value)

  // This function stores the answer from the fourth question (text input)
  const onBookChange = event => setBook(event.target.value)

  return (
    <main className='main-container'>
      <form className='form' onSubmit={onSubmit}>

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
            {enjoyReadingArray.map(radio =>
              <label key={radio}>
                <input
                  type='radio'
                  value={radio}
                  onChange={onRadioChange}
                  checked={enjoyReading === radio}
                />
                {radio} 
              </label>
              )}
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
         {/* Second question */}
         {question === 2 &&(
          <section className='question'>
            <h2>What do you enjoy reading?</h2>
            {genresArray.map(genre =>
              <label key={genre}>
                <input
                  type='checkbox'
                  value={genre}
                  onChange={onGenresChange}
                  checked={genres}
                />
                {genre} 
              </label>
              )}
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
              <label>
                <h2>Which format do you prefer reading the most?</h2>
                <select value={readingFormat} onChange={onReadingFormatChange}>
                    <option value="">Choose one...</option>
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
        {/* Fourth question */}
        {question === 4 &&(
          <section className='question'>
              <label>
                <h2>What is your favorite book?</h2>
                <input
                  type='text'
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
      </form>
    </main>
  )
}

export default Survey