import React from 'react';

export const Button = ({ counter, setCounter }) => {
  const handleCounter = () => {
    setCounter(counter + 1)
  }
  return (
    <button type="button" onClick={handleCounter}>Next</button>
  )
}

export const Back = ({ counter, setCounter }) => {
  const handleCounter = () => {
    setCounter(counter - 1)
  }
  return (
    <button type="button" onClick={handleCounter}>Back</button>
  )
}

export const QuestionButton = ({ counter, setCounter, answer }) => {
  const handleCounter = () => {
    if (!answer) {
      alert('Ope, looks like you forgot to answer. Just go ahead and pop your answer in there!')
    } else {
      setCounter(counter + 1)
    }
  }
  return (
    <button type="button" onClick={handleCounter}>Next</button>
  )
}

export const StartOver = ({ setCounter }) => {
  const handleCounter = () => {
    setCounter(0)
  }
  return (
    <button type="button" onClick={handleCounter}>Re-start</button>
  )
}