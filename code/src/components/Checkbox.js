import React, { useState } from 'react'

const Checkbox = () => {
    const [wantsNewsletter, setwantsNewsletter] = useState("");
    return (
        <label className="test">
        Newsletter?
        <input
          type="checkbox"
          name="Receive newsletter"
          checked={wantsNewsletter}
          onChange={event => setwantsNewsletter(event.target.checked)}
        />
      </label>
    )
}

export default Checkbox