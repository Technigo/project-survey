import React, {useState} from 'react'
import {values} from 'components/Form'
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 8px;
  padding: 0 4px;
  height: 32px;
  box-sizing: border-box;
  font-size: 1.2em;
  border: none;
  background-color: transparent;
  color: white;
  border: 3px solid white;
  border-radius: 10px;
`;

export const Text = ({object, setObject}) => {
  
    return (
      // <form onSubmit={handleSubmit}>
<label>
Your name
<StyledInput 
      type="text"
      value={object.name}
      onChange={e =>{object.name = e.target.value}}
/>
</label>
    )
  
  }

    //     <>
    //   <label>
    //     First Name:
    //     <input
    //       type="text"
    //       value={first}
    //       onChange={e => setFirst(e.target.value)}
    //     />
    //   </label>
    //        <label>
    //        Last Name:
    //        <input
    //          type="text"
    //          value={last}
    //          onChange={e => setLast(e.target.value)}
    //        />
    //      </label>
    // </>