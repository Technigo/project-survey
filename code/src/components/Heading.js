import React from 'react'
import 'components/heading.css'

export const Heading = ({ number, title }) => {
  return (
    <h2 className='question-title'>
      {number ? number + '. ' : ''}
      {title}
    </h2>
  )
}
