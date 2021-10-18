import React, { useState } from "react"

export const Suggestion = ({moodInput, socialInput, viewInput}) => {
    return (
    <>
    
    {moodInput === 'Chill' && socialInput === 'Forever alone' && viewInput === 'From my own perspective' &&
    (<div>
        <h2>Hello</h2>
    </div>)

    }

    {moodInput === 'Hyped' && socialInput === 'Love to be in a group' && viewInput === 'By controlling others' &&
    (<div>
        <h2>BYE</h2>
    </div>)

    }

    {moodInput === 'Overthinking' && socialInput === 'A few peeps is enough' && viewInput === 'Watching from the outside' &&
    (<div>
        <h2>WHAT</h2>
    </div>)

    }
    </>)
}
        
    

    
        
