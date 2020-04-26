import React from "react";

import styled from "styled-components";

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  visibility: ${props => (props.checked ? "visible" : "hidden")};
`;

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  height: 1px;
  margin: -1px;
  visibility: hidden;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadio = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? "green" : "gray")};
  border-radius: 50%;
  transition: all 150ms;
`;

export const RadioButton = ({ checked, ...props }) => {
  return (
    <RadioContainer>
      <HiddenRadio checked={checked} {...props} />
      <StyledRadio checked={checked}>
        <Icon checked={checked} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" fill="black" />
        </Icon>
      </StyledRadio>
    </RadioContainer>
  );
};