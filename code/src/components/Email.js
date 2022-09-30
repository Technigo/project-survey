import React from 'react';

export const Email = ({email, setEmail}) => {
const handleEmailChange = (event) => {
    setEmail(event.target.value)
    }
  
    return (
        <label for="email">
        <h2>Email adress</h2>
        
            <h3 class ="h3">Type yor email here</h3>
            <p>If you want discount on yuor next course or other information</p>
            <input type="email" name="email" Placeholder="email address here" value={email} onChange={handleEmailChange}
            />
  </label>
    );
  }
  
  