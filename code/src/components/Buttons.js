import React from 'react'
import '../buttons.css'

export const Button = ({ prevBtn, nextBtn }) => {
  
  return (
    <>
    <button className='btn back-btn' onClick={prevBtn}></button>
    <button className='btn next-btn' onClick={nextBtn}>Next</button>    
    </>
  )
}


export const StartButton = ({ nextBtn }) => {
  return (
    <button className='btn next-btn' onClick={nextBtn}>Create card</button>  
  )
}

export const SubmitButton =  ({ nextBtn }) => {
  return (
    <button className='btn submit-btn' onClick={nextBtn}>Look at card</button>  
  )
}