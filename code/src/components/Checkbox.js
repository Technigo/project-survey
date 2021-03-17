import React, { useState } from 'react'

const Checkbox = () => {
    const [wantsNewsletter, setwantsNewsletter] = useState("");
    return (
        <label>
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
    )
}

export default Checkbox