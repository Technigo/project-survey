import React, {useState} from 'react'
import {values} from 'components/Form'

export const Text = ({object, setObject}) => {
  
  
    return (
      // <form onSubmit={handleSubmit}>
<label>
<input type="text" 
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