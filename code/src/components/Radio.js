import React, { useState, useRef } from 'react'
import {SelectForm} from 'components/Select'
import {values, Bar} from 'components/Form'
import {RadioButton} from './RadioButton'
import styled from 'styled-components'

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  visibility: ${props => (props.checked ? "visible" : "hidden")};
  fill: white;
`;

const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin: 8px;
  
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
  background: ${props => (props.checked ? "purple" : "#EDC2D8FF")};
  border-radius: 50%;
  transition: all 150ms;
`;

  

export const Radio = () => {
  const [room, setRoom] = useState()
 const rooms = ["studio", "1 room", "2 rooms", "3+ rooms"]

  // const handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   alert(`Submitting Name ${name}`)
  // }
  return (
    <div>
    <p>{room}</p>
        <label>
        1 room
         <RadioContainer>
      <HiddenRadio    value="1 room"
            onClick={event => setRoom(event.target.value)}
            checked={room === "1 room"}  />
      <StyledRadio checked={room === "1 room"}>
        <Icon checked={room === "1 room"} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
        </Icon>
      </StyledRadio>
    </RadioContainer>
    </label>
    <label>
    2 rooms
         <RadioContainer>
      <HiddenRadio    value="2 room"
            onClick={event => setRoom(event.target.value)}
            checked={room === "2 room"}  />
      <StyledRadio checked={room === "2 room"}>
        <Icon checked={room === "2 room"} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
        </Icon>
      </StyledRadio>
    </RadioContainer>
    </label>
      
    <label>
    3 rooms
        <RadioContainer>
      <HiddenRadio    value="3 room"
            onClick={event => setRoom(event.target.value)}
            checked={room === "3 room"}  />
      <StyledRadio checked={room === "3 room"}>
        <Icon checked={room === "3 room"} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4" />
        </Icon>
      </StyledRadio>
    </RadioContainer>
    
    </label>
    </div>

  )

}
