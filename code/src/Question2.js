import React, { useState } from 'react'


const descriptionsArray = [
    'Nice',
    'Charming',
    'Brave',
    'Hard-working',
    'Reliable',
    'Thoughtful',
    'Witty',
    'Optimistic',
    'Intelligent',
    'Kind',
    'Sincere',
    'Loving',
    'Loyal',
    'Helpful',


]



export const Question2 = ({name, descriptions, setdescription, onDescriptionChange }) => {
console.log(descriptions)

const [active, setActive] = useState()
    return (
        <section className="question2 section">
            <h2>Select some word that discribe {name}</h2>
            <div className="description">
                {descriptionsArray.map(description => {
                    return (
                        <div className="description-container">
                            <input
                                value={description}
                                id={description}
                                type="button"
                                onClick={() => onDescriptionChange(description)}
                                className={descriptions.includes(description) 
                                    ? "button-active"
                                    : "button-not-active"
                                }
                                
                            />
                        </div>
                    )
                })}
            </div>
            
            
        </section>
    )
}