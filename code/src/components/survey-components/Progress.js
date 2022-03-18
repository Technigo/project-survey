import React from 'react'

const Prgress = (props) => {

  return (
    <section>
      <h3> Step {props.count} out of {props.totalStep} </h3>
    </section>
  )
}

export default Prgress