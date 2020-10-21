import React, {useState} from 'react'
import './Checkbox.css'

export const Checkbox = () => {
  const [wantTerms, setWantTerms] = useState("")

    return (
        <div className="checkbox">
                <h4> Did you read the T&C?</h4>
                <label className="check">
                <p>Yes of course :) </p>
                <input
                    type="checkbox"
                    checked={wantTerms}
                    onChange={event => setWantTerms(event.target.checked)}
                    required
                />
            </label>

        </div>
    )

}