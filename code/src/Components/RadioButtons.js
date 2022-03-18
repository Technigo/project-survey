import React from "react";



const intervals = ["2+ times a week", "1-2 times a week", "1-2 times a month", "Never, I don't have good taste in movies 🙄"];

const RadioButtons = ({intervalGroup, onChangeAgain}) => {
    return (
        <form className="section">
            <p>How often do you visit ut?</p>
            {intervals.map((element) => (
                <label key={element}>
                    <input
                        className="radio-button-input"
                        type="radio"
                        onChange={onChangeAgain}
                        checked={intervalGroup === element}
                        value={element}
                        />
                    {element}
                </label>
            ))}
        </form>
    );
};

export default RadioButtons



// export const DivisibleByFive = (props) => {
//     const counter = props.counter;

//     return (
//         <div>
//             <p>Divisible by Five</p>
//         </div>
//     )
// }