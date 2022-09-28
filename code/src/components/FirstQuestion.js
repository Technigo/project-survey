import React, { useState } from 'react';

const FirstQuestion = () => {
  const [inputOne, setInputOne] = useState('');

  /*   const assignValue = () => {
    // eslint-disable-next-line no-restricted-globals
    setInputOne(event.target.value)
  } */

  return (
    <div>
      <label htmlFor="name-input">Name
        <input id="name-input" type="text" onChange={(event) => setInputOne(event.target.value)} />
      </label>
      <p>The input name:{inputOne}</p>
    </div>
  )
}

export default FirstQuestion;