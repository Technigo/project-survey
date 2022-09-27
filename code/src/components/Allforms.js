import React, { useState } from 'react';

import Opening from './Opening';
import Firstquestion from './Firstquestion';
/* import Secondquestion from './Secondquestion'; */

const Allforms = () => {
  /* All functions connected to the return below */
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [cakeArray, setCakeArray] = useState([])

  /* Every onChange function that affects the input */
  const onCounterChange = () => {
    setCounter(counter + 1)
  }
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onCakeArrayChange = (cake) => {
    if (cakeArray.includes(cake)) {
      const filteredCakeArray = cakeArray.filter((item) => {
        return item !== cake
      })
      setCakeArray(filteredCakeArray)
    } else {
      setCakeArray([...cakeArray, cake])
    }
  }
  return (
    <>
      {counter === 1 && (
        <Opening
          name={name}
          onNameChange={onNameChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 2 && (
        <Firstquestion
          cakeArray={cakeArray}
          onCakeArrayChange={onCakeArrayChange}
          onCounterChange={onCounterChange} />
      )}
    </>
  )
};

export default Allforms;