import React, { useState } from 'react';
import Form from './components/Form';
import Summary from './components/Summary';

export const App = () => {
  const [name, setName] = useState('');
  const [bookname, setBookName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [numberOfBook, setnumberOfBook] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [summary, setSummary] = useState(false);

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onBookChange = (event) => {
    setBookName(event.target.value)
  };
  const onFeelingChange = (event) => {
    setFeeling(event.target.value)
  };
  const onNumberOfBookChange = (event) => {
    setnumberOfBook(event.target.value)
  };
  const onRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSummary(true);
  };

  const isFormFinished = () => {
    if (name === "") {
      return false
    };
    if (bookname === "") {
      return false
    };
    if (feeling === "") {
      return false
    };
    if (numberOfBook === "") {
      return false
    };
    if (recommendation === "") {
      return false
    };
    return true
  };

  return (
    <div>
      {!summary && (
        <Form
          name={name}
          onNameChange={onNameChange}
          bookname={bookname}
          onBookChange={onBookChange}
          feeling={feeling}
          onFeelingChange={onFeelingChange}
          onNumberOfBookChange={onNumberOfBookChange}
          numberOfBook={numberOfBook}
          onRecommendationChange={onRecommendationChange}
          recommendation={recommendation}
          handleSubmit={handleSubmit}
          isFormFinished={isFormFinished}
        />
      )};
      {summary && (
        <Summary name={name}
          bookname={bookname}
          feeling={feeling}
          numberOfBook={numberOfBook}
          recommendation={recommendation}
        />
      )};
    </div>
  );
};











