
import React, { useState } from 'react';
import { Section } from './components/Section'
import { Header } from './components/Header'
import SubmitButton from './components/Button'
import { Result } from './components/Result'

export const App = () => {
  const [counter, setCounter] = useState(0)
  const steps = [1, 2, 3, 4, 5, 6]
  return (
    <div>
      {counter === 0
&& <Header counter={counter} setCounter={setCounter} />}
      {counter === steps.find((step) => step === counter)
&& <Section counter={counter} setCounter={setCounter} />}
      {counter === 7
&& <SubmitButton className="test" counter={counter} setCounter={setCounter} name="Submit" />}
      {counter > 7
&& <Result />}
    </div>
  );
}
