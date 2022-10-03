import React from 'react';

export const Writing = ({ writing, setWriting}) => {
  const handleWritingChange = (event) => {
    setWriting(event.target.value);
  }
  
  return (
<div class="textOne">
<label for="writing">
  <h3 class ="h3">Was the course as expected?</h3>
    <textarea className="input-writing" cols="40" rows="5"  type="text" placeholder='write here' value={writing} onChange={handleWritingChange} />
</label>
</div>
 );
}

export const Better = ({ better, setBetter }) => {
  const handleBetterChange = (event) => {
    setBetter(event.target.value);
  }
  return (
  <div>
  <label for="better">
    <h3 class ="h3">What can we do better for future courses</h3>
    <textarea className="input-writing" cols="40" rows="5"  type="text" placeholder='write here' value={better} onChange={handleBetterChange} />
</label>
</div>
  );
}



  
