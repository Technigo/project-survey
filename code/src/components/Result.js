/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import React from 'react';
import styled from 'styled-components/macro';

export const Result = ({ name, animal, job, color, verb, adjective }) => {
  const handleReloadClick = () => {
    window.location.reload();
  }
  const SpanStyle = {
    color
  }
  const StyledResult = styled.div`
  display: flex;
  flex-direction:column;
  gap: 15px;
  `
  return (
    <StyledResult>
      <p className="result-txt">
        The {animal} wanted to be a {job}, but turned a funny shade of
        <span style={SpanStyle}>{color}</span>
        after trying to {verb}! What a {adjective} shame.
      </p>
      <p><span id="play-again">Want to play again, {name}?</span></p>
      <button id="restart-btn" type="button" onClick={handleReloadClick}>Start over</button>
      <a href="https://www.flaticon.com/free-icons/pixel" title="pixel icons">Pixel icons created by Taufik Ramadhan - Flaticon</a>
    </StyledResult>
  )
}