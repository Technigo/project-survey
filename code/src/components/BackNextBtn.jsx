import React from 'react'

export const BackNextBtn = ({ step, setStep, backFront, loneTeam, learnKnow }) => {
  const answers = [backFront, loneTeam, learnKnow];

  const handleBtnClick = (backOrNext) => {
    if (backOrNext) {
      setStep(step + 1)
    } else if (!backOrNext) {
      setStep(step - 1);
    }
  };

  return (
    <div className="btn-container">
      <button className="btn" type="button" onClick={() => handleBtnClick(false)}>Back</button>

      <button
        className="btn"
        type="button"
        onClick={() => {
          if (step === 1 && answers[0]) {
            handleBtnClick(true);
            return
          } else if (!answers[0]) {
            alert('Pick one!')
            return
          }
          if (step === 2 && answers[1]) {
            handleBtnClick(true);
            return
          } else if (!answers[1]) {
            alert('Pick one 2!')
            return
          }
          if (step === 3 && answers[2]) {
            handleBtnClick(true);
          } else if (!answers[2]) {
            alert('Pick one 3!')
          }
        }}>
        Next
      </button>
    </div>
  )
}

/* const handleStepButtonClick = (nextStep) => {
  if (backFront) {
    if (nextStep && step < 4) {
      setStep(step + 1);
    }
  } else { alert('Pick one') }

  else if (!nextStep && step > 0) {
    setStep(step - 1);
  }
}; */