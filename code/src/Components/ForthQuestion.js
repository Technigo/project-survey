import React from 'react'

export const ForthQuestion = (props) => {
    const {skillInput, onSkillInputChange, onStepChange, onStepBackChange} = props
    return(
        <div>
            <label htmlFor="htmlSkill">html</label>
            <input 
            name={skillInput}
            id="htmlSkill"
            type="checkbox" 
            value='html'
            onChange={onSkillInputChange}/>

            <label htmlFor="cssSkill">css</label>
            <input 
            name={skillInput}
            id="sccSkill"
            type="checkbox" 
            value='css'
            onChange={onSkillInputChange}/>

            <label htmlFor="javaSkill">java</label>
            <input 
            name={skillInput}
            id="javaSkill"
            type="checkbox" 
            value='java'
            onChange={onSkillInputChange}/>
            
            <button onClick={onStepChange}>Next question</button>
            <button onClick={onStepBackChange}>Previous question</button>
        </div>
      )
} 