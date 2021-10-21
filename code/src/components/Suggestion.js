import React from "react"
import { FirstPersonShooter } from "./FirstPersonShooter"
import { Moba } from "./Moba"
import { Strategy } from "./Strategy"
import { Survival } from "./Survival"

export const Suggestion = ({moodInput, socialInput, viewInput}) => {

    return (
    <div className="suggestion-container">
    <h2>You should play:</h2>

    {viewInput === 'From my own perspective' && (
        (moodInput === 'Chill' || moodInput === 'Overthinking') ? <FirstPersonShooter/> : <Survival/>
    )}

    {viewInput === 'Watching from the outside' && (
        <Strategy/>
    )}

    {viewInput === 'By controlling others' && (
        <Moba/>
    )}
    </div>
)}

        
    

    
        
