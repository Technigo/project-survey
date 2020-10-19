import React from 'react';

const Summary = ({ name, select, radiobutton, checkbox }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Select: {select}</p>
      <p>Radiobutton: {radiobutton}</p>
      {checkbox ? <p>Checkbox is true</p> : <p>Checkbox is false</p>}
      <p>Checkbox: {checkbox}</p>

      {console.log(name, select, radiobutton, checkbox)}
    </div>
  );
};

export default Summary;
