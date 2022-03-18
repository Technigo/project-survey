import React, { useState } from 'react'

const Reviewinformation = (props) => {
  const [showResult, setShowResult] = useState(false)

    const handleSubmit = () => {
       setShowResult(true) 
       props.setCount(0)
       props.setBackBtn(false)
    }

    // const handleRestart = () => {
    //         props.setCount(1)
    //         setShowResult(false)
    // }

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
        <p>You will receive details in <a href="mailto:eyahyakhan@gmail.com"> {props.email}</a></p>

        {/* <button className='btn btn-primary' onClick={handleRestart}>Restart</button> */}
      </section>}

    </div>
  )
}

export default Reviewinformation