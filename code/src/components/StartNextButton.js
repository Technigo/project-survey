import React from 'react'

import './StartNextButton.css'

import data from '../data.json'

const StartNextButton = ({ setQuestion, progress, setProgress, state }) => {

  const isStateUnchanged = () => {
    return state === ""
  }
  const onQuestionChange = () => {
    onProgressChange()
    setQuestion(data.QuestionsNumberArray[progress + 1])

  }
  const onProgressChange = () => {
    setProgress(progress + 1)
  }
  return (
    <button
      className="start-next-button"
      disabled={isStateUnchanged()}
      type="button"
      onClick={onQuestionChange}>
      {progress === 0 && ("Start survey")}
      {progress > 0 && ("Next question")}
    </button>
  )
}

export default StartNextButton