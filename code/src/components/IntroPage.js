import React from 'react'

const IntroPage = ({onStepChange}) => {
  return (
    <section className="intro">
      <div className="intro-text">
        <label>
          Let's travel the world!       
        </label>
      </div>
      <div>
        <button type="submit" onClick={onStepChange} className="start-btn"><a href="">I'm ready!</a></button> 
      </div>
    </section>
  )
}

export default IntroPage