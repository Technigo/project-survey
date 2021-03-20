import React, { useState } from 'react';
import Form from './components/Form';
import Summary from './components/Summary';


export const App = () => {
  const [name, setName] = useState('');
  const [bookname, setBookName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [numberOfBook, setnumberOfBook] = useState('');
  const [recomendation, setRecomendation] = useState('');
  const [summary, setSummary] = useState('false')


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
  const onrecomendationChange = (event) => {
    console.log(event.target.value);
    setRecomendation(event.target.value);
  }
  const onsummaryChange = (event) => {
    setSummary(summary)
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
        onrecomendationChange={onrecomendationChange}
        recomendation={recomendation}


      />
      <Summary name={name}
        bookname={bookname}
        feeling={feeling}
        numberOfBook={numberOfBook}
        recomendation={recomendation}
      />
    </div>
  )
}
