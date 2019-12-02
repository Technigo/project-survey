import React from 'react'
import './surveysection.css'

export const SurveySection = (props) => {
  return (
    <section
      id={props.id}
      className={props.className}>
      {props.children}
    </section>
  )
}