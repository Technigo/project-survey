import React from 'react';

const WhyCute = ({ whyCute, setWhyCute }) => {
  const handleWhyCuteChange = (event) => {
    setWhyCute(event.target.value);
  }
  return (
    <>
      <p>What is the cutest thing about Borzois?</p>
      <input type="text" value={whyCute} onChange={handleWhyCuteChange} />
    </>
  );
}

export default WhyCute