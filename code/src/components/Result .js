/* eslint-disable max-len */
import React from 'react';

export const Result = ({ descriptions }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p>According to your submition your best fit mentor is: </p>
      <img className="mentorimg" src="mentor.jpeg" alt="Mentor" />
      <p className="description"> {descriptions} </p>
      <button onClick={refreshPage} type="submit">Reload</button>
    </>
  );
}