import React from 'react';

export const Email = ({email, setEmail}) => {
const handleEmailChange = (event) => {
  setEmail(event.target.value)
}
return (
<form>
<label for="email">
  <h3 class ="h3">Your email adress</h3>
  <input type="email" name="email" Placeholder="email address here" value={email} onChange={handleEmailChange}
  />
</label>
</form>
  );
}
  
  