import React, { useState } from 'react'


export const Checkbox = () => {
    const [wantNews, setWantNews] = useState("")

    return (
        <div>
            <label>
                <h4> Would you like our newsletter?</h4>
                <p>Yes please</p>
                <input
                    type="checkbox"
                    checked={wantNews}
                    onChange={event => setWantNews(event.target.checked)}
                />
            </label>

        </div>
    )

}