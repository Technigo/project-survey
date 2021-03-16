import React, { useState } from 'react'

export const BringItem = () => {
  const [inputItem, setInputItem] = useState('')

  const onItemSelect = (event) => {
    setInputItem(event.target.value)
    console.log(event.target.value)
  }


  return(
    <div>
      <label htmlFor='item'>You can only bring one item, what will you bring?</label>
        <input
        type='text'
        id='item'
        value={inputItem}
        onChange={onItemSelect}/>
    </div>
  )
}