import React, { useState } from 'react';

export const Select = (props) => {
    const [location, setLocation] = useState("");

    return (
        <form>
            <select
                onChange={event => props.setLocation(event.target.value)}
                value={props.location}
            >
                <option value="">Select location</option>
                <option value="Stockholm"></option>
                <option value="California"></option>
                <option value="Bali"></option>
            </select>
        </form>
    );
};



// import { DivisibleBy3 } from 'Components/DivisibleBy3'
// import { DivisibleBy5 } from './DivisibleBy5';

// export const InfoBanner = (props) => {
//     const counter = props.counter;
//     if (counter % 2 === 0 || counter % 3 === 0) {

//         return ( 
//             <div>
//                 <DivisibleBy3 />
//                 <p>The counter is even</p>
//             </div>
//             )
//     } else {
//         return (
//             <div>
//                 <p>The counter is odd</p>
//             </div>
//         )
//     }
// }