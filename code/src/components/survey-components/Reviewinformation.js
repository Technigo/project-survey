import React, { useState } from 'react'

const Reviewinformation = (props) => {
  const [showResult, setShowResult] = useState(false)

    const handleSubmit = () => {
       setShowResult(true) 
       props.setCount(0)
       props.setBackBtn(false)
    }

  return (
    <section>
      {!showResult && 
      <form onSubmit={handleSubmit} tabIndex={0}>
        <h3 tabIndex={0}>Review</h3>
       <p tabIndex={0}>Your name: <b>{props.name}</b></p>
       <p tabIndex={0}>AgeGroup: <b>{props.ageGroup}</b></p>
       <p tabIndex={0}>Guest number: <b>{props.personNumber}</b></p>
       <p tabIndex={0}>Email: <b>{props.email}</b></p>
       <button className='btn btn-primary'>Submit</button>
       </form>
       }
      {showResult && 
      <section className='msg-thank-you' tabIndex={0}>
        <h1>Thank you {props.name}!</h1>
        <p>You are registered with {props.personNumber} guest and their age is {props.ageGroup} years.</p>
        <p>You will receive details in <a href="mailto:eyahyakhan@gmail.com"> {props.email}</a></p>
      </section>}

    </section>
  )
}

export default Reviewinformation