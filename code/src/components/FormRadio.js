import React, { useState } from 'react'


const FormRadio = () => {

  const [howManyFruits, setHowManyFruits] = useState('')

  const onHowManyChange = (event) => {
    setHowManyFruits(event.target.value)
  }

  return (
    <>
      <p>How many fruits do you eat a day?</p>
        
        <div>
          <label htmlFor='02'>0 - 2</label>
          <input type='radio' id='02' value='two or less' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
        <div>
          <label htmlFor='25'>2 - 5</label>
          <input type='radio' id='25' value='two to five' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
        <div>
          <label htmlFor='610'>6 - 10</label>
          <input type='radio' id='610' value='six to ten' name='howManyFruits' onChange={onHowManyChange}></input>
        </div>
    </>
  )

  }

export default FormRadio

