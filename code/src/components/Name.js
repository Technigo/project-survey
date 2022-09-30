import React from 'react';


 {/* Progressbar */}
 <div className="progress-bar-container">
 <label className="progress-label" htmlFor="survey">
   Progress{' '}
 </label>
 <progress className="progress-bar" id="survey" value="8" max="8" />
</div>


export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    <label for="name">
    
      <p>What is your name?</p>
      <input type="text" placeholder='name' value={name} onChange={handleNameChange} />
    </label>
  );
}

 
