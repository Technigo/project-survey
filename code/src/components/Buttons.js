import React from 'react'

export const Button = ({prevBtn, nextBtn }) => {

  return (
    <>
    <button onClick={prevBtn}>Back</button>
    <button onClick={nextBtn}>Next</button>    
    </>
  )
}