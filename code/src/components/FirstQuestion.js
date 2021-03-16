import React, { useState } from 'react'
import SecondQuestion from './SecondQuestion'

const amountOfBooks = [
  'Not at all',
  '1-2 times a week',
  '2-3 times a week',
  '4-5 times a week',
  'Everyday'
]

const FirstQuestion = () => {
  const [books, setBooks] = useState([0])
  const [submit, setSubmit] = useState(false)

  return (
    <form onSubmit={(event) => event.preventDefault()} >
      <p>How often do you read?</p>
      {amountOfBooks.map(book => (
        <label key={book}>
          <input
          type='radio'
          value={book}
          onChange={event => setBooks(event.target.value)}
          checked={books === book}
          />
          {book}
          </label>
      ))}

      <div>
        <button type="submit"
        onClick={() => setSubmit(true)}
        >NEXT 
        </button>
      </div>

      {submit && (
        <div>
        <SecondQuestion />   
      </div>
      )}

    </form>
  )
}

export default FirstQuestion

/* onSubmit={(event) => event.preventDefault} */