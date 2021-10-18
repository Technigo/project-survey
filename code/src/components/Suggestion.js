import React, { useState } from "react"

export const Suggestion = (moodInput, socialInput, viewInput) => {
    
    if (moodInput === 'Chill') {
        if(socialInput === 'Forever alone') {
            if(viewInput === 'From my own perspective') {
                return (
                    <div>
                        <h2>Hello</h2>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>BYE!</h2>
                    </div>
                )
            }
        }

    }
        
}