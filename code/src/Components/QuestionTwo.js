import React, { useState } from 'react'



const professions = ["Art", "Healthcare", "Sales/Marketing", "IT/Technology", "Student", "Media", "Other"];
export const QuestionTwo = () => {
    const [profession, setProfession] = useState("");
    return (
        <form className="selection">
            Please select your profession

            <select onChange={event => setProfession(event.target.value)}>

                {professions.map(item => (
                    <option key={item} value={item}> {item}</option>

                ))}
            </select>
        </form >
    );
};