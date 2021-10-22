import React from "react";

const MoodQ = ({
    mood,
    onMoodChange, 
    onStepChange,
}) => {
return (
    <div className="bigWrapper">
    <form>
        <div className="formWrapper">
    
    <label>
        What are you in the mood for?
        <div className="radiobutton"> 
            <input 
            id="radiobutton" 
            type="radio" 
            value="blood"
            onChange={() => onMoodChange('blood')}
            checked={mood === "blood"}
            />
            <span role="img" aria-label="blood" >
            🔪🩸  
            </span>
        </div>
    </label>


   <label>
   <div className="radiobutton"> 
        <input 
        id="radiobutton" 
        type="radio" 
        value="candy"
        onChange={() => onMoodChange('candy')}
        checked={mood === "candy"}
        />
    <span role="img" aria-label="candy" >
        🍭 🍬 
    </span>
    </div>
   </label>

   <button className="button" onClick={onStepChange}>
       See result!
   </button>
   
   </div>
    </form>
    </div>

);
};


export default MoodQ;