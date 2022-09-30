import React from 'react';

export const Level = ({ level, setLevel }) => {
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  }
  return (
<div>
<h2>style</h2>
<h3 class ="h3">What type of surfer are you? Feel free to choose multiple styles</h3>

<form className='form-level'>
Slalom
  <input type="checkbox"  id="Slalom" name='Slalom' value={level} onChange={handleLevelChange}
  label for ="Slalom" 
  />

  Hydrofoil
  <input type="checkbox"  id="hydrofoil" name="hydrofoil" value="hydrofoil" 
  label for ="hydrofoil" 
  />

  Freestyle
  <input type="checkbox"  id="freestyle" name="freestyle" value="freestyle" 
  label for ="freestyle" 
  />

Freeride
  <input type="checkbox"  id="freeride" name='freeride' value={level} onChange={handleLevelChange}
  label for ="freeride" 
  />

Wave
  <input type="checkbox"  id="Wave" name='Wave' value={level} onChange={handleLevelChange}
  label for ="Wave" 
  />

Formula
  <input type="checkbox"  id="formula" name='formula' value={level} onChange={handleLevelChange}
  label for ="formula" 
  />

  </form>  
  
  </div>
)}


