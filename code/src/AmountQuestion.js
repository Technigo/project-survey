import React from 'react'

export const AmountQuestion = ({ handleSetAmount }) => {

  return (
    <div>
      <label htmlFor="sel">Hur många tacos äter du?</label>
      <select
        id="sel"
        onChange={(event) => handleSetAmount(event.target.value)}>
        <option value="">Ange antal</option>
        <option value="1">1</option>
        <option value="10">10</option>
        <option value="1000000000">Flera</option>
      </select>
    </div>
  )
}