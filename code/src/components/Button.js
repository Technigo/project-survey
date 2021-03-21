import React from 'react'

const Button = ({ className, step, btnText }) => {

  return (
        <button className={className} onClick={step}>{btnText}</button>
  )
}
export default Button
