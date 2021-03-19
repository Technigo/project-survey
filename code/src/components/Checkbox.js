import React, { useState } from 'react'

const Checkbox = ({checkboxInput, IselectCheckbox}) => {
    //const [wantsNewsletter, setwantsNewsletter] = useState("");
    //console.log(wantsNewsletter)
    return (
        <div className="checkbox-container">
          <label className="checkbox-label">
        <p className="checkbox-text">Newsletter?</p>
        <div className="checkbox-input">
        <input
          type="checkbox"
          name="Receive newsletter"
          //checked={checkboxInput}
          onChange={e => IselectCheckbox(e)}
          className="checkbox"
        />
        </div>
      </label>
        </div>
    )
}

export default Checkbox