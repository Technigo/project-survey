import React, { useState } from 'react'
import './Checkbox.css'

export const Checkbox = () => {
    const [wantNews, setWantNews] = useState("")

    return (
        <div className="checkbox">
                <h4> Would you like our newsletter?</h4>
                <label className="check">
                <input
                    type="checkbox"
                    checked={wantNews}
                    onChange={event => setWantNews(event.target.checked)}
                />
                <p>Yes please</p>

            </label>

        </div>
    )

}