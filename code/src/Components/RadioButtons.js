import React, { useState } from "react";

const ageGroups = ["0-18", "19-30", "31+"];

export const RadioButtons = () => {
    const [ageGroup, setAgeGroup] = useState();

    return (
        <form>
            <p>Age Group:</p>
            {ageGroups.map(group => (
                <label key={group}>
                    <input
                        type="radio"
                        value="{group}"
                        onChange={event => setAgeGroup(event.target.value)}
                        checked={ageGroup === group}
                    />
                    {group}
                </label>
            ))}
        </form>
    );
};



// export const DivisibleByFive = (props) => {
//     const counter = props.counter;

//     return (
//         <div>
//             <p>Divisible by Five</p>
//         </div>
//     )
// }