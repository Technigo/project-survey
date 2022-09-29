import React from 'react';

export const Result = ({ book, language, version }) => {
  return (
    <div className='results'>
      <p>You would like an {language} version of {book}, illustrated by {version}. Send it to all your friends and wait for christmas! </p>
      <label>
          <input type="email" aria-label="First checkbox" placeholder='Your friends emailadress here '/>
     
        </label>
       
    </div>
  )
}