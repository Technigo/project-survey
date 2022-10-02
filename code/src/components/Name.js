import React from 'react';


export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
  setName(event.target.value);
}
return (
  <form>
<label for="name">
<h3 class ="h3">What is your name?</h3>
      <input type="text" placeholder='name' value={name} onChange={handleNameChange} />
    </label>
  </form>
  );
}

