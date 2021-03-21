import React, { useState } from 'react'

const Checkbox = ({checkboxInput, IselectCheckbox}) => {

    return (
        <div className="checkbox-container">
          <label className="checkbox-label">
            <p className="checkbox-text">Newsletter?</p>
            <div className="checkbox-input">
              <input
                type="checkbox"
                name="Receive newsletter"
                onChange={e => IselectCheckbox(e)}
                className="checkbox"
              />
            </div>
      </label>
        </div>
    )
}

export default Checkbox