import React, { useState } from 'react'
import Header from './Components/Header'
import Form from './Components/Form'

export const App = () => {
  // const [counter, setCounter] = useState(0)

  return (
    <>
    <Header />

    <div>
      <Form />
      {/* <p>Counter value: {counter}</p>
      <button onClick={(event) => setCounter(counter + 1)}>Increase counter</button> */}
    </div>

    </>

  )
}
