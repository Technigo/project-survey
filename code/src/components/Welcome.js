import React from "react"

export const Welcome = (props) => {

  const { setProgress } = props

  return (
    <>
      <h1>Welcome to our event!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, aliquam nihil. Eaque quisquam fugit unde sed? Quas placeat quos corrupti.</p>
      {setProgress(0)}
    </>
  )
}