import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { EndPage } from 'components/EndPage'
import {values, Bar} from 'components/Form'

const StyledSelect = styled.select`
  display: block;
  width: 200px;
  height: 35px;
  background: transparent;
  color: white;
  padding-left: 5px;
  font-size: 14px;
  border: 2px solid white;
  margin-left: 10px;

  option {
    color: black;
    background-color: purple;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;


export const Select = ({object}) => {
    const [location, setLocation] = useState("")
    object.city = location
    return (
      // <form onSubmit={handleSubmit}>
      <label>
        My city:
        <StyledSelect
          onChange={e => setLocation(e.target.value)}
          value={location}
        >
          <option value="">Select location</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Oslo">Oslo</option>
          <option value="London">London</option>
          <option value="Rome">Rome</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
        </StyledSelect>
      </label>
      // <input type="submit" value="Submit" />
      // </form>
    )
  }

  