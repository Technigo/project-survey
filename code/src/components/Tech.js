import React from 'react'


const Tech = (props) => {
  
  const {tech, setTech} = props

  const onTechChange = (e) => {
    setTech(e.target.name)
    console.log(e.target.name)
  }

  return (
    <div className="survey-item tech">
      <p className="section-heading">What tech do you know?</p>

      <input 
      id="html" 
      name="HTML"
      type="checkbox" 
      value={tech}
      onChange={onTechChange}
      />
      <label htmlFor="html">HTML</label>

      <input 
      id="css"
      name="CSS" 
      type="checkbox" 
      value={tech}
      onChange={onTechChange}
      />
      <label htmlFor="css">CSS</label>

      <input 
      id="js" 
      name="JavaScript"
      type="checkbox"
      value={tech}
      onChange={onTechChange} 
      />
      <label htmlFor="js">JavaScript</label>

      <input 
      id="react" 
      name="React"
      type="checkbox"
      value={tech}
      onChange={onTechChange} 
      />
      <label htmlFor="react">React</label>

      <input 
      id="npm" 
      name="NPM"
      type="checkbox" 
      value={tech}
      onChange={onTechChange}
      />
      <label htmlFor="npm">NPM</label>

    </div>
  )
}

export default Tech
