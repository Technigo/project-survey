import React from 'react'


const Tech = ({ setTech }) => {

  const techArray = ['HTML', 'CSS', 'JavaScript', 'React', 'NPM']

  return (
    <div className="survey-item tech">
      <p className="section-heading">What tech do you know?</p>

      {techArray.map((item) => (
        <label className="hours" key={item}>
        <input
          type="radio"
          value={item}
          name="tech"
          onChange={(e) => {setTech(e.target.value)}}
        />
        {item}
        </label> 
        
        ))}
    </div>
  )
}

export default Tech
