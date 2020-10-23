import React from 'react'


const discriptions = [
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

export const Question2 = ({name, discription, setDiscription, onDiscriptionChange }) => {
    return (
        <section>
            <h2>Select some word that discribe {name}</h2>
            <div>
                {discriptions.map(discription => {
                    return (
                        <div>
                            <label htmlFor={discription}>{discription}</label>
                            <input
                                id={discription}
                                type="checkbox"
                                checked={discriptions.includes({discription})}
                                onChange={() => onDiscriptionChange({discription})}
                        />
                        </div>
                    )
                })}
            </div>
            
            
        </section>
    )
}