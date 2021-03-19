import React, { useState } from 'react';
import Form from './components/Form';




export const App = () => {
  const [name, setName] = useState('');
  const [bookname, setBookName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [numberOfBook, setnumberOfBook] = useState('');

  const onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  }
  const onBookChange = (event) => {
    console.log(event.target.value)
    setBookName(event.target.value)
  }
  const onFeelingChange = (event) => {
    console.log(event.target.value)
    setFeeling(event.target.value)
  }
  const onNumberOfBookChange = (event) => {
    console.log(event.target.value)
    setnumberOfBook(event.target.value)
  }
  return (
    <div>
      <Form
        name={name}
        onNameChange={onNameChange}
        bookname={bookname}
        onBookChange={onBookChange}
        feeling={feeling}
        onFeelingChange={onFeelingChange}
        onNumberOfBookChange={onNumberOfBookChange}
        numberOfBook={numberOfBook}

      />
    </div>
  )
}
