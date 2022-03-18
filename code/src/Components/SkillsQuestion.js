import React from 'react'

export const SkillsQuestion = (props) => {
    const {step, skillsArray, onSkillsArrayChange, onStepChange, onStepBackChange} = props
    const progress = (step/8)*100

    return(
        <div className="container">
            <p className="labelStyle">What of the following skills do you have:</p>
                <div className="offices">
                <div className="skillContainer">
                        <label className="checkBtnContainer">APIs
                            <input 
                            type="checkbox" 
                            value='APIs'
                            checked={skillsArray.includes('APIs')}
                            onChange={()=>onSkillsArrayChange('APIs')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">CSS
                            <input 
                            type="checkbox" 
                            value='CSS'
                            checked={skillsArray.includes('CSS')}
                            onChange={()=>onSkillsArrayChange('CSS')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">Design
                            <input 
                            type="checkbox" 
                            value='Design'
                            checked={skillsArray.includes('Design')}
                            onChange={()=>onSkillsArrayChange('Design')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">Figma
                            <input 
                            type="checkbox" 
                            value='Figma'
                            checked={skillsArray.includes('Figma')}
                            onChange={()=>onSkillsArrayChange('Figma')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">Github
                            <input 
                            type="checkbox" 
                            value='Github'
                            checked={skillsArray.includes('Github')}
                            onChange={()=>onSkillsArrayChange('Github')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">HTML
                            <input
                            type="checkbox" 
                            value='HTML'
                            checked={skillsArray.includes('HTML')}
                            onChange={()=>onSkillsArrayChange('HTML')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">JavaScript
                            <input 
                            type="checkbox" 
                            value='JavaScript'
                            checked={skillsArray.includes('JavaScript')}
                            onChange={()=>onSkillsArrayChange('JavaScript')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">Node.js
                            <input 
                            type="checkbox" 
                            value='Node.js'
                            checked={skillsArray.includes('Node.js')}
                            onChange={()=>onSkillsArrayChange('Node.js')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">React
                            <input 
                            type="checkbox" 
                            value='React'
                            checked={skillsArray.includes('React')}
                            onChange={()=>onSkillsArrayChange('React')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    <div className="skillContainer">
                        <label className="checkBtnContainer">Redux
                            <input 
                            type="checkbox" 
                            value='Redux'
                            checked={skillsArray.includes('Redux')}
                            onChange={()=>onSkillsArrayChange('Redux')}/>
                            <span className="checkmarkCheck"></span>
                        </label>
                    </div>
                    
                </div>

                <div className="buttons">
                <button className="button"
                    onClick={onStepChange}
                    >Next <span className="arrow right"></span></button>
                <button className="button"
                    onClick={onStepBackChange}
                    ><span className="arrow left"></span> Back</button>
                
            </div>
            <div className="progress-container">
                <div style={{width: `${progress}%`}} className="progress-value">
                </div>
            </div>
        </div>
      )
} 