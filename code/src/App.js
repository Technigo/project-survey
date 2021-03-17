import React from 'react';


import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';


export const App = () => {
  return (
    <>
        <div className="form-container">
          <span role="img" aria-label="Money bag image">💰</span>
          <h1>Welcome to Investor Check!</h1>
          <p>Double check your investment goals ✅ </p>
          <p>Start by entering your name 👇 </p>
          <Question1 />
          <Question2 />
          <Question3 />

        </div>
    </>
  )
}
