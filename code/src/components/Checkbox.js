import React, { useState } from 'react'

const Checkbox = () => {
    const [wantsNewsletter, setwantsNewsletter] = useState("");
    return (
        <div className="checkbox-container">
          <label className="checkbox-label">
        <p className="checkbox-text">Newsletter?</p>
        <div className="checkbox-input">
        <input
          type="checkbox"
          name="Receive newsletter"
          checked={wantsNewsletter}
          onChange={event => setwantsNewsletter(event.target.checked)}
          className="checkbox"
        />
        </div>
      </label>
        </div>
    )
}

export default Checkbox