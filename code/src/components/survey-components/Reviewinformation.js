import React, { useState } from 'react'

const Reviewinformation = (props) => {
  const [showResult, setShowResult] = useState(false)

    const handleSubmit = () => {
       setShowResult(true) 
    }

  return (
    <div className='section'>

      {!showResult && 
      <form onSubmit={handleSubmit}>
        <h3>Review</h3>
       <h3>Your name: {props.name}</h3>
       <h3>AgeGroup: {props.ageGroup}</h3>
       <h3>Guest number: {props.personNumber}</h3>
       <h3>Email: {props.email}</h3>

       <button className='btn btn-primary'>Submit</button>
       </form>
       }
      {showResult && 
      <section>
        <h1>Thank you {props.name}!</h1>
        <p>You are registered with {props.personNumber} guest and their age: {props.ageGroup} years.</p>
        <p>You will receive details in {props.email}</p>
        <button className='btn btn-primary'>Restart</button>
      </section>}

    </div>
  )
}

export default Reviewinformation