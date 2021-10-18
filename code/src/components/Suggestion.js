import React from "react"
import { FirstPersonShooter } from "./FirstPersonShooter"
import { Moba } from "./Moba"
import { Strategy } from "./Strategy"

export const Suggestion = ({moodInput, socialInput, viewInput}) => {
    return (
    <>
    <div className="game-container">
    <h2>You should play:</h2>
    
    {moodInput === 'Chill' && socialInput === 'Forever alone' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)

    }

    {moodInput === 'Hyped' && socialInput === 'Love to be in a group' && viewInput === 'By controlling others' &&
    (<div>
        <Moba/>
    </div>)

    }

    {moodInput === 'Overthinking' && socialInput === 'A few peeps is enough' && viewInput === 'Watching from the outside' &&
    (<div>
        <Strategy/>
    </div>)

    }
    </div>
    </>)
}
        
    

    
        
