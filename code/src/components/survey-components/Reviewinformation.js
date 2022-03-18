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
      <form onSubmit={handleSubmit}>
        <h3>Review</h3>
       <p>Your name: <b>{props.name}</b></p>
       <p>AgeGroup: <b>{props.ageGroup}</b></p>
       <p>Guest number: <b>{props.personNumber}</b></p>
       <p>Email: <b>{props.email}</b></p>
       <button className='btn btn-primary'>Submit</button>
       </form>
       }
      {showResult && 
      <section className='msg-thank-you'>
        <h1>Thank you {props.name}!</h1>
        <p>You are registered with {props.personNumber} guest and their age is {props.ageGroup} years.</p>
        <p>You will receive details in <a href="mailto:eyahyakhan@gmail.com"> {props.email}</a></p>
      </section>}

    </section>
  )
}

export default Reviewinformation