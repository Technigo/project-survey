import React from 'react';

export const LongLived = ({ Lived, setLived }) => {
  const handleLongLivedChange = (event) => {
    setLived(event.target.value);
  }
  return (
    <>
      <p>How long have you lived in Stockholm?</p>
      <input type="text" value={Lived} onChange={handleLongLivedChange} />
    </>
  );
}