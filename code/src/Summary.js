import React from 'react'

export const Summary = ({name, location, ageGroup, setSection}) => {

    return (
    <section className="summary">
        <h2>Summary of survey</h2>
        <p>Thank you {name}. Your current location is {location} and your age is {ageGroup}.</p>
    
        <button><a href=""></a>Restart</button>
    </section>
);
};
