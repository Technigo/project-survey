import React from "react";

export const Age = ({ name, setAge, increase, decrease }) => {

    return (
    <>
     <div className="container">
      <h1>Hello {name}! Select your age:</h1>
      <div className="checkboxes">
     <label className="options">
      <input type="radio" value="25-35 years old"  onChange={e=>setAge(e.target.value)}/>
      <p>25-35 years old</p>
      </label>
      <label className="options">
      <input type="radio" value="36-45 years old"  onChange={e=>setAge(e.target.value)}/>
       <p>36-45 years old</p>
      </label>
      <label className="options">
      <input type="radio" value="+46 years old"  onChange={e=>setAge(e.target.value)}/>
       <p>+46 years old</p>
      </label>
      </div>

    <div>
        <div className="buttons">
         <button onClick={decrease}>Back</button>
         <button onClick={increase}>Next</button>
        </div>
      </div>
      </div>
    </>
    )
}

