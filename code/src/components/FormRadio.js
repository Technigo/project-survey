import React, { useState } from 'react'


const FormRadio = (props) => {

  const {howManyFruits, setHowManyFruits} = props

  const onHowManyChange = (event) => {
    setHowManyFruits(event.target.value)
    console.log(howManyFruits)
  }

  return (
    <>
      <p>How many fruits do you eat a day?</p>
        
        <div>
          <label className='radioLabel' htmlFor='0 - 2'>0 - 2</label>
          <input type='radio' id='0 - 2' value='0 - 2' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
        <div>
          <label className='radioLabel' htmlFor='2 - 5'>2 - 5</label>
          <input type='radio' id='2 - 5' value='2 - 5' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
        <div>
          <label className='radioLabel' htmlFor='6 - 10'>6 - 10</label>
          <input type='radio' id='6 - 10' value='6 - 10' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
    </>
  )

  }

export default FormRadio

