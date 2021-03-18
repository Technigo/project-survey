import React from 'react'


const SubmitButton = (props) => {

  const {submit, setSubmit} = props

  const onSubmitting = (event) => {
    setSubmit(!submit)
  }
 
  return (
      <div>

        <input
          type='submit'
          value='submit'
          className='submit-Btn'
          onClick={(event) => onSubmitting(event)} 
          
        />
      </div>
   
  )
}


export default SubmitButton

 // <button ></button>