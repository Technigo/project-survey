import React from 'react'


const Tech = (props) => {

  const techArray = ['HTML', 'CSS', 'JavaScript', 'React', 'NPM']

  const [handleUserInput, input] = [props.handleUserInput, props.input]

  return (
    <div className="survey-item tech">
      <p className="section-heading">What tech do you know?</p>

      {techArray.map((tech, index, array) => (
        <label className="hours" key={tech}>
        <input
          type="checkbox"
          value={tech}
          onChange={handleUserInput}
          checked={input === tech}
        />
        {tech}
        </label> 
        
        ))}
    </div>
  )
}

export default Tech
