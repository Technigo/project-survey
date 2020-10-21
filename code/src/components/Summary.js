import React from 'react';

const Summary = ({ header, name, select, radiobutton, checkbox }) => {
  return (
    <>
      <h2>{header}</h2>
      <p>Name: {name}</p>
      <p>Select: {select}</p>
      <p>Radiobutton: {radiobutton}</p>
      {checkbox ? <p>Checkbox is true</p> : <p>Checkbox is false</p>}

      {console.log(name, select, radiobutton, checkbox)}
    </>
  );
};

export default Summary;
