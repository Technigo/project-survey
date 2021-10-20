import React from "react";

const MoodQ = ({
    mood,
    onMoodChange, 
    onStepChange,
}) => {
return (
<form>
    <label>
        <input 
        id="radiotest" 
        type="radio" 
        value="blood"
        onChange={() => onMoodChange('blood')}
        checked={mood === "blood"}
        />
    <span role="img" aria-label="blood" >
    🔪 🩸  
    </span>
   </label>

   <label>
        <input 
        id="radiotest" 
        type="radio" 
        value="candy"
        onChange={() => onMoodChange('candy')}
        checked={mood === "candy"}
        />
    <span role="img" aria-label="candy" >
        🍭 🍬
    </span>
   </label>

   <button onClick={onStepChange}>Next</button>
</form> 

);
};


export default MoodQ;