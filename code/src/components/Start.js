import React from 'react'
import { WelcomeIcon } from './WelcomeIcon'

export const Start = () => {
  return (
    <div className="content">
      <WelcomeIcon />
      <h1> Lifestyle survey</h1>
      <h2 className="description">A survey about your sleep habits, level of physical activity and diet.</h2>
    </div>
  )
}