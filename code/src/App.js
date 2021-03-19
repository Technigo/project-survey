import React, { useState } from 'react';
import Form from './components/Form';




export const App = () => {
  const [name, setName] = useState('');
  const [bookname, setBookName] = useState('');

  const onNameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  }
  const onBookChange = (event) => {
    console.log(event.target.value)
    setBookName(event.target.value)
  }

  return (
    <div>
      <Form
        name={name}
        onNameChange={onNameChange}
        bookname={bookname}
        onBookChange={onBookChange} />
    </div>
  )
}
