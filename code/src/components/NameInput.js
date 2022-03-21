import React from 'react'

export const NameInput = ({nameInput, nameUpdateInput, stepChange}) => {


   
    return (
    <form>
      <label htmlFor="nameReply">What's your name?</label>
      <input id="nameReply" value={nameInput} onChange={nameUpdateInput} />
      
      <button disabled={nameInput === ''}
      onClick={stepChange}>Next question</button>
    </form>

    )
}
