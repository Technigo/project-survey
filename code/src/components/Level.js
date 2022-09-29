import React from 'react';

export const Level = ({ level, setLevel }) => {
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  }
  return (
<div>
<form>
Bouldering
  <input type="checkbox"  id="bouldering" name='bouldering' value={level} onChange={handleLevelChange}
  label for ="bouldering" 
  />
  
  Top rope
  <input type="checkbox"  id="bouldering" name="bouldering" value="bouldering" 
  label for ="bouldering" 
  />
  
  Sport climb
  <input type="checkbox"  id="bouldering" name="bouldering" value="bouldering" 
  label for ="bouldering" 
  />
  </form>  
  </div>
)}


