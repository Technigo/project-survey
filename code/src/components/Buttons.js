import React from 'react'

export const Buttons = (props) => {
    const [counter, setCounter] = useState(0)
  const handleCounterButtonClick = (shouldIncrease) => {
    if (shouldIncrease && counter < 4) {
      setCounter(counter + 1)
    } else if (!shouldIncrease && counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <button type="button" onClick={() => handleCounterButtonClick(false)}>Go back</button>
      <button type="button" onClick={() => handleCounterButtonClick(true)}>Next question</button>
    </>
  )
}