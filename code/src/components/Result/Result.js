import React from 'react'
import './Result.css'

const Result = ({snack, GenreGroup, name}) => {
    return (
        <div>
            <h2>Turn your cozy mood on</h2>
                <p>Get your blanket ready and invite {name} for a virtual movie night you can watch a {GenreGroup}, whilst snacking on some {snack}</p>
        </div>
    )
}

export default Result