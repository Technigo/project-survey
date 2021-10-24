import React from 'react'


const Enjoy = ({ setEnjoy }) => {

  const enjoyArray = ['never', 'sometimes', 'sure', 'could not manage without', 'always high on coffeine']

  return (
    <div className="survey-item enjoy">
      <p className="section-heading">Do you enjoy coffee ☕️?</p>

      {enjoyArray.map((item) => (
        <label className="enjoy" key={item}>
        <input
          type="radio"
          value={item}
          name="enjoy"
          onChange={(e) => {setEnjoy(e.target.value)}}
        />
        {item}
        </label> 
        
        ))}
    </div>
  )
}

export default Enjoy