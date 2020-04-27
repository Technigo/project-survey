import React, {useState} from 'react'
import styled from 'styled-components'

const Icon = styled.svg`
  fill: none;
  stroke: #333;
  stroke-width: 2px;
  visibility: ${props => (props.checked ? "visible" : "hidden")};
`;

const CheckboxContainer = styled.div`
  margin: 8px;
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
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

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${props => (props.checked ? "#65c4d8" : "#eac9c0")};
  border-radius: 3px;
  transition: all 150ms;
`;

export const Checkbox = ({object}) => {
  const [wantsParking, setWantsParking] = useState(false)
  console.log(object.parking)
  object.parking = wantsParking
  return (
    <label>
    Do you want parking?
    <CheckboxContainer >
      <HiddenCheckbox checked={wantsParking} onChange={(event)=>setWantsParking(event.target.checked)}/>
      <StyledCheckbox checked={wantsParking}>
        <Icon checked={wantsParking} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    </label>
  );
};

  //   <label>
  //   Need parking?
  //   <input
  //     type="checkbox"
  //     checked={wantsParking}
  //     onChange={event => setParking(event.target.checked)}
  //   />
  // </label>