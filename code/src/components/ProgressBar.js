import React from 'react'
import 'components/progressBar.css'

export const ProgressBar = ({ state, steps }) => {
  const Bar = () =>
    steps !== undefined &&
    steps.map((step, i) => {
      if (i > 0) {
        return (
          <div key={step} className='bar' style={{ width: 100 / state.questions - 1 + '%' }}></div>
        )
      }
      return null
    })

  return (
    <div className='progress'>
      <Bar />
    </div>
  )
}
