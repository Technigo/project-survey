import React from "react";


export const Name = ({ name, setName, increase  }) => {
  const onStepChange = (event) => {
    setName(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

    
    return (
      <div className="container">
        <h1>Thanks for flying with Space Traveling inc. We would appreciate if you could answer this survey.<br></br><br></br>What is your name?<br></br><br></br>My name is: {name}</h1>
        <form className="InputName" onSubmit={handleSubmit}>
          <input className="inputBox" type="text" value={name} onChange={onStepChange} placeholder="Type your name..." />
        </form>
        <button onClick={increase}>Start 🚀</button>
      </div>
      )
    }