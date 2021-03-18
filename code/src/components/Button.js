import React from 'react'

const Button = (props) => {

  return (
        <button className={props.className} onClick={props.step}>{props.btnText}</button>

  )
}
export default Button
