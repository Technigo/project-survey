import React from 'react';



export const Writing = ({ writing, setWriting}) => {
  const handleWritingChange = (event) => {
    setWriting(event.target.value);
  }
  
  return (
<div>
<label for="writing">
<h2>Feedback</h2>

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
    <h3 class ="h3">Let us know what we can do better for the next course</h3>
    <textarea className="input-writing" cols="40" rows="5"  type="text" placeholder='write here' value={better} onChange={handleBetterChange} />
</label>
</div>
    );
  }



  export const Rate = ({ rate, setRate }) => {
    const handleRateChange = (event) => {
      setRate(event.target.value);
    }
    return (
      <label class="rating-label"><strong>Hearts using <code>step="0.25"</code></strong>
      <input
        class="rating"
        max="5"
        oninput="this.style.setProperty('--value', `${this.valueAsNumber}`)"
        step="0.25"
        style="--fill: #C8102E;--symbol:var(--heart);--value:2.75"
        type="range"
       
        value={rate} onChange={handleRateChange}/>
    </label>
    );}
