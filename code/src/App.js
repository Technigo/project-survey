import React, { useState } from 'react';
import { Name } from './components/Name'
import { Frequently } from './components/Frequently'
import { Brand } from './components/Brand'
import { Spend } from './components/Spend'
import { Secondhand } from './components/Secondhand'
import { Summary } from './components/Summary'

export const App = () => {
  const [name, setName] = useState('')
  const [frequently, setFrequently] = useState('')
  const [brand, setBrand] = useState('')
  const [spend, setSpend] = useState('')
  const [secondHand, setSecondHand] = useState('')

  return (
    <>
      <Name name={name} setName={setName} />
      <Frequently frequently={frequently} setFrequently={setFrequently} />
      <Brand brand={brand} setBrand={setBrand} />
      <Spend spend={spend} setSpend={setSpend} />
      <Secondhand secondHand={secondHand} setSecondHand={setSecondHand} />
      <Summary
        name={name}
        frequently={frequently}
        brand={brand}
        spend={spend}
        secondHand={secondHand} />
    </>
  );
}
