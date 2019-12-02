import React from 'react'

export const Form = (props) => {
  return (
    <form
      className="form"
      onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}