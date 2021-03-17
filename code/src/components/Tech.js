import React from 'react'


const Tech = (props) => {

  const techArray = ['HTML', 'CSS', 'JavaScript', 'React', 'NPM']

  const [setTech] = [props.setTech]

  return (
    <div className="survey-item tech">
      <p className="section-heading">What tech do you know?</p>

      {techArray.map((item) => (
        <label className="hours" key={item}>
        <input
          type="radio"
          value={item}
          onChange={(e) => {setTech(e.target.value)}}
        />
        {item}
        </label> 
        
        ))}
    </div>
  )
}

export default Tech
