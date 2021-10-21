import React from 'react'
import 'components/questionHeading.css'

export const QuestionHeading = ({ number, title }) => {
  return (
    <h2 className='question-title'>
      {number}. {title}
    </h2>
  )
}
