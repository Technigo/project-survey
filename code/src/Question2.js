import React from 'react'

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

export const Question2 = ( {name, descriptions, onDescriptionChange} ) => {

    return (
        <section className="question2 section">
            <h2>Select some word that discribe {name}</h2>
            <div className="description">
                {descriptionsArray.map(description => {
                    return (
                        <input
                            key={description}
                            value={description}
                            id={description}
                            type="button"
                            onClick={() => onDescriptionChange(description)}
                            aria-pressed={descriptions.includes(description)}
                            className={descriptions.includes(description) 
                                ? "button-pressed"
                                : "button-not-pressed"
                            } 
                        />
                    )
                })}
            </div> 
        </section>
    )
}