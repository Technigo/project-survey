import React, { useState } from 'react'

import { NameQuestion } from './NameQuestion'
import { DishQuestion } from './DishQuestion'
import { AmountQuestion } from './AmountQuestion'
import { Summary } from './Summary'

export const App = () => {
  const [name, setName] = useState()
  const [dish, setDish] = useState()
  const [amount, setAmount] = useState()
  const [done, setDone] = useState(false)

  const handleSetName = (e) => setName(e)
  const handleSetDish = (e) => setDish(e)
  const handleSetAmount = (e) => setAmount(e)

  return (
    <main>
      <NameQuestion
        name={name}
        handleSetName={handleSetName} />
      <DishQuestion
        handleSetDish={handleSetDish} />
      <AmountQuestion
        handleSetAmount={handleSetAmount} />
      {!done && <button type="button" onClick={() => setDone(true)}>Submit</button>}
      {done && <Summary
        name={name}
        dish={dish}
        amount={amount} />}
    </main>
  )
}
