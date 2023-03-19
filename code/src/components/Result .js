/* eslint-disable max-len */
import React from 'react';

export const Result = ({ descriptions }) => {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <p>Your best fit is our mentor: </p>
      <img className="mentorimg" src="mentor.jpeg" alt="Mentor" />
      <p className="description"> {descriptions} </p>
      <p className="contact"> Contact info:techmentor@gmail.com </p>
      <button onClick={refreshPage} type="submit">Reload</button>
    </>
  );
}