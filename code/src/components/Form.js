import React from 'react'
import './form.css'

export const Form = (props) => {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      {props.children}
    </form>
  )
}