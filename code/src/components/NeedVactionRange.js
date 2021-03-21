import React from 'react'

import StartNextButton from './StartNextButton'

import './NeedVactionRange.css'

const NeedVacationRange = ({setQuestion, needVacation, setNeedVacation, progress, setProgress }) => {

  const onNeedVacationChange = (event => {
    setNeedVacation(event.target.value)
  })
  return (
    <section className="slider-container">
      <h3 className="question-heading">From one to ten: how badly do you need vacation?</h3>
      <div className="label-slider-wrapper">
        <label htmlFor="range" className="range-lable">
          <div className="range-item">Can wait and see (1)</div>
          <div className="range-item">Must have vacation (10)</div>
        </label>
        <input
          className="slider"
          type="range"
          id="range"
          min="1"
          max="10"
          value={needVacation}
          onChange={onNeedVacationChange}
          required
        />
      </div>
      <StartNextButton
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
        state={needVacation} />
    </section>
  )
}
export default NeedVacationRange