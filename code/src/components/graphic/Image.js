import React from 'react'
import './image.css'

export const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className} />
  )
}