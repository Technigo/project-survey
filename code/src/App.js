import React, { useState } from 'react';
import Intro from 'components/Intro.js';
import ProductType from 'components/ProductType';
import Summary from 'components/Summary';
import PriceQuestionTwo from 'components/PriceQuestionOne';

export const App = () => {
  const [price, setPrice] = useState('');
  const [productType, setProductType] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');

  return (

    <div className="main-container">
      <Intro gender={gender} setGender={setGender} ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
      <ProductType setProductType={setProductType} productType={productType} />
      <PriceQuestionTwo price={price} setPrice={setPrice} />
      <Summary
        price={price}
        setPrice={setPrice}
        productType={productType}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        gender={gender} />
    </div>
  );
}

/* export const App = () => {
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  return (
    <div>
      <Counter counter={counter} setCounter={setCounter} />
      {counter === 0 && (
        // <UserName name={userName} setName={setUserName} />
        <Input input={userName} setInput={setUserName}
        inputLabel="Hello, please type in your name" showClearButton={false} showInput={false} />
      )}
      {counter === 2 && (

        <UserInput userInput={userInput} setUserInput={setUserInput} />
      )}
      {counter === 10 && (
        <Summary name={userName} input={userInput} counter={counter} />
      )}
    </div>
  );
} */