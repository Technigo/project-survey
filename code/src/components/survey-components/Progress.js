import React from 'react'

const Prgress = (props) => {

  return (
    <div className='section'>
      <h3> Step {props.count} out of {props.totalStep} </h3>
    </div>
  )
}

export default Prgress