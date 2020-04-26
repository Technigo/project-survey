import React, {useState} from 'react'
import {values} from 'components/Form'
import styled from "styled-components";

const StyledInput = styled.input`
  margin: 8px;
  box-sizing: border-box;
  font-size: 1.2em;
  border: none;
  background-color: #3CBC8D;
  color: white;
`;

export const Text = ({object, setObject}) => {
  
    return (
      // <form onSubmit={handleSubmit}>
<label>
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