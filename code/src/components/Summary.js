import React from 'react'

const Summary = ({enjoyReading, readingFormat, book, isChecked, checkboxGroup}) => {

  return (
    <div className="summary">
      <h2 tabindex='0'>Thank you for your participation in the survey!</h2>
      <h3 tabindex='0'>Here you can find a summary of your answers:</h3>
      <ul tabindex='0' className='summary-list'>
        <li className='summary-list-item'>How much do you enjoy reading: <span className='highlighted-text'>{enjoyReading}</span></li>
        <li className='summary-list-item'>The format you prefer reading the most: <span className='highlighted-text'>{readingFormat}</span></li>
        <li className='summary-list-item'>Your favorite book: <span className='highlighted-text'>{book}</span></li>
        <li className='summary-list-item'>Your agreement to add your favorite book to our list of recommended books: <span className='highlighted-text'>{isChecked ? 'I agree' : 'I do not agree'}</span></li>
        <li className='summary-list-item'>The type(s) of book(s) you read most often: <span className='highlighted-text'>{checkboxGroup.join(', ')}</span></li>
      </ul>
    </div>
  )
}

export default Summary