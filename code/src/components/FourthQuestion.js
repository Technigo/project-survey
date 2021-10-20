import React from 'react'

const FourthQuestion = (props) => {
const {flavour, onFlavourChange, onFinalQuestion} = props

  return (
    <form className="form">
      <label>
        Pick your popcorn flavour
        <select value={flavour} onChange={onFlavourChange}>
          <option value="salty">salty</option>
          <option value="sweet">sweet</option>
          <option value="garlic">garlic</option>
          <option value="butter">butter</option>
        </select>
      </label>
      
      <button onClick={onFinalQuestion}>See overview</button>
    </form>
  )
}

export default FourthQuestion