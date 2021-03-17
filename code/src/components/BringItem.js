import React from 'react'

export const BringItem = ({item, setInputItem}) => {
  

  const onItemSelect = (event) => {
    setInputItem(event.target.value)
    
  }


  return(
    <div>
      <label>You can only bring one item, what will you bring?
        <input
        type='text'
        value={item}
        onChange={(event) => {onItemSelect(event)}}
        />
      </label>
    </div>
  )
}

