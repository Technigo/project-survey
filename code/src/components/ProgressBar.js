import React from 'react'
import 'components/progressBar.css'

export const ProgressBar = ({ state, steps }) => {
  const Bar = () =>
    steps !== undefined &&
    steps.map(() => <div className='bar' style={{ width: 100 / state.questions + '%' }}></div>)

  return (
    <div className='progress'>
      <Bar />
    </div>
  )
}
