import React, { useState } from "react"
import "./radiobuttons.css"

export const RadioButtons = (props) => {
    const { genre, setGenre } = props

    return (
        props.genreGroups.map((group) => {
            return <li>
                <input
                    className="radio-buttons"
                    required
                    type="radio"
                    id={group}
                    name="genres"
                    value={group}
                    onChange={(event) => setGenre(event.target.value)}
                    checked={genre === group}
                />

                <label className="button-label" for={group}>{group}</label>

                <div class="check"></div>
            </li>
        })

    )
}