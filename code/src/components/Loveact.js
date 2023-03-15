import React from 'react'

export const Loveact = ({ loveAct, setLoveAct }) => {
  const handleLoveAct = (event) => {
    setLoveAct(event.target.value)
  }

  return (
    <form>
      Select..
      <select
        className="love-act-drop-down"
        value={loveAct}
        onChange={handleLoveAct}
        key="{loveAct}">
        <option value="">..an act of love</option>
        <option value="hug">A hug</option>
        <option value="gentle pat">A gentle pat</option>
        <option value="kiss on the cheek">A kiss on the cheek</option>
        <option value="cuddle">a cuddle</option>
      </select>
    </form>
  )
}