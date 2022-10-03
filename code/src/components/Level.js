import React from 'react';

// doesn't work 100% --> result doesn't rerender the value at last page


export const Level = ({ level, setLevel }) => {
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  }
return (

<div>
<h3 class ="h3">What type of surf style do you practice? Feel free to choose multiple styles</h3>
<form>
<p>
  Slalom
  <input type="checkbox" label for="slalom" name="slalom" value="slalom"
  value={level} onChange={handleLevelChange} />

  Hydrofoil
  <input type="checkbox" iname="hydrofoil" label for ="hydrofoil" value="hydrofoil"
  value={level} onChange={handleLevelChange} />

  Freestyle
  <input type="checkbox" name="freestyle"  label for ="freestyle" value="freestyle"
  value={level} onChange={handleLevelChange} />
</p>

<p>
  Freeride
  <input type="checkbox" name='freeride' label for="freeride" value="freeride"
  value={level}onChange={handleLevelChange} /> 

  Wave
  <input type="checkbox" name="Wave" label for="wave" value="wave"
 value={level} onChange={handleLevelChange} />

Race
  <input type="checkbox" name="Wave" label for="wave" value="race"
 value={level} onChange={handleLevelChange} />

</p> 

</form> 
</div>
)}

