import React from 'react'

const Intro = ({onStepChange}) => {
    return (
    <section className="intro">
      <label>LOVE IS ALL YOU NEED</label>
      <h1>Lets talk about something important, life.</h1>
      {/* <p>Be a sport and click the first button <span role="img" aria-label="happy emoji">😄</span> !</p> */}
      <div className="start-btn">
      <button onClick={onStepChange} className="btn"><a href="#question-one">Sure thing</a></button> 
      {/* <button onClick={}>No way Jose'</button>  */}
      </div>
    </section>
    )

}

export default Intro