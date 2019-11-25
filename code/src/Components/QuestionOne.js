import React, { useState } from 'react'


const genders = ["Male", "female", "None"];
export const QuestionOne = () => {
    const [genderGroup, setGenderGroup] = useState();
    return (
        <form>
            I am
            {genders.map(gender => (
                <label key={gender}>
                    <input
                        type="radio"
                        value={gender}
                        onChange={event => setGenderGroup(event.target.value)}
                        checked={genderGroup === gender}
                    />
                    {gender}
                </label>
            ))}
        </form>
    );
};