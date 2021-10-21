import React from 'react'

const FourthQuestion = (props) => {
const {flavour, onFlavourChange, onFinalQuestion} = props

  return (
    <form className="form">
      <label>
        Pick your popcorn flavour
        <select value={flavour} onChange={onFlavourChange}>
          <option value="salty" className="form-element">salty</option>
          <option value="sweet" className="form-element">sweet</option>
          <option value="garlic" className="form-element">garlic</option>
          <option value="butter" className="form-element">butter</option>
        </select>
      </label>
      
      <button onClick={onFinalQuestion} className="form-element">See overview</button>
    </form>
  )
}

export default FourthQuestion