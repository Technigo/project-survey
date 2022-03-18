import React from 'react'

const Slider = (props) => {
    
  return (
    <div className='section'>
    <div className="slidecontainer">
    <input 
        type="range" 
        min='1'
        max={props.totalStep} 
        value={props.count}
        readOnly={true}
        className="slider" 
        id="myRange"
        />
        </div>
        </div>
  )
}

export default Slider