import React from 'react';

export const Result = ({ firstQuestion, secondQuestion, thirdQuestion }) => {
  return (
    <>
      <h1>This is what I learnt about you: </h1>
      <p> The thing(s) you like most about your workplace
        is/are the {firstQuestion} {secondQuestion}
      </p>
      <p> In your spare time you enjoy {thirdQuestion}, preferably in the company of X </p>
      <p> If you were to change your career, you would definitely end up in the X sector. </p>
      <p> You are most proud of your X Y and your ability to always Z</p>
      <p> Your previous boss would probably describe you as X.</p>
    </>
  )
}