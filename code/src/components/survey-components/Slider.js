import React from 'react'

const Slider = (props) => {
    
  return (
    <section>
    <div className="slidecontainer">
    <label for="myRange"></label>
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
        </section>
  )
}

export default Slider