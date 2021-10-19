import React from "react"
import { FirstPersonShooter } from "./FirstPersonShooter"
import { Moba } from "./Moba"
import { Strategy } from "./Strategy"
import { Survival } from "./Survival"

export const Suggestion = ({moodInput, socialInput, viewInput}) => {
    return (
    <>
    <div className="game-container">
    <h2>You should play:</h2>
    
    {moodInput === 'Chill' && socialInput === 'Forever alone' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === 'Chill' && socialInput === 'A few peeps is enough' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === 'Chill' && socialInput === 'Love to be in a group' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === 'Hyped' && socialInput === 'Forever alone' && viewInput === 'From my own perspective' &&
    (<div>
        <Survival/>
    </div>)}

    {moodInput === 'Hyped' && socialInput === 'A few peeps is enough' && viewInput === 'From my own perspective' &&
    (<div>
        <Survival/>
    </div>)}

    {moodInput === 'Hyped' && socialInput === 'Love to be in a group' && viewInput === 'From my own perspective' &&
    (<div>
        <Survival/>
    </div>)}

    {moodInput === 'Overthinking' && socialInput === 'Forever alone' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === 'Overthinking' && socialInput === 'A few peeps is enough' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === 'Overthinking' && socialInput === 'Love to be in a group' && viewInput === 'From my own perspective' &&
    (<div>
        <FirstPersonShooter/>
    </div>)}

    {moodInput === '' && socialInput === '' && viewInput === '' &&
    (<div>
      Hello
    </div>)}

    </div>
    </>)
}
        
    

    
        
