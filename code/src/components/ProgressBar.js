import React from 'react'
import Filler from 'components/Filler'

const ProgressBar = (props) => {
  return (
    <div className="progress-bar question-container">
      <Filler progress={props.progress}/>
    </div>
  )
}

export default ProgressBar