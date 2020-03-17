import React, { useState } from "react"
import "./radiobuttons.css"

export const RadioButtons = (props) => {
    const { genre, setGenre } = props

    return (
        props.genreGroups.map((group) => {
            return <label className="radio-label">
                {group}
                <input className="radio-buttons" required
                    name="ageGroups"
                    type="radio"
                    value={group}
                    onChange={(event) => setGenre(event.target.value)}
                    checked={genre === group} />

            </label>
        })

    )
}