import React, { useState } from 'react';
import { Counter } from 'components/Counter';
import { InfoBanner } from 'components/InfoBanner';

export const App = () => {

const [counter, setCounter] = useState(0)

  return (
<div>
  <h2>SUPER Counter</h2>
  <Counter counter = {counter} setCounter = {setCounter}/>
  <InfoBanner counter = {counter}/>   

</div>
  )
}
