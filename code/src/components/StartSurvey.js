import React from 'react'
import 'components/startSurvey.css'
import { Heading } from 'components/Heading'

export const StartSurvey = ({ incrementStep }) => {
  return (
    <div className='form'>
      <Heading title={'Start survey?'} />
      <div className='label'>
        <button className='button-start' onClick={incrementStep}>
          Start
        </button>
      </div>
    </div>
  )
}
