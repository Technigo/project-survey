/*import React, { useState } from 'react';
import { RadioButton } from './RadioButton';


const [submitted, setSubmitted] = useState(false);

export const Submit = () => {
    const [temperature, setTemperature] = useState(20);
    return (
        <div>


            <button onClick={() => setTemperature(-5)}>Freeze!</button>
            <button onClick={() => setTemperature(30)}>Warm!</button>
            <button onClick={() => setTemperature(120)}>Boiling!</button>

            {temperature > 100 && <p>Steamy!!</p>}
            {temperature < 0 && <p>Ice ice baby!!</p>}
            <h1>Current temperature: {temperature}  degrees. </h1>
            <div>
                {/* /* <button onClick={() => setSubmitted(true)}> */}
               /* <button>
     SUBMIT
</button>

</div>
</div>
);
};


/**** Sofies svar på stack *****/
/*
export const Submit = (props) => {
    return (
        <div className="summary">
            <h2>Thank you for your answers {props.name}!</h2>
            <p>#1: {props.location}</p>
            <p>#2: {props.group}</p>
        </div>
    )
}*/

/* **** button from github https://eager-mcclintock-78056a.netlify.com/ ****
<button
onClick={() => setSubmitted(true)}>
SUBMIT
</button>



{submitted && <Summary name={name} colour={color} weapon={weapon} />}

*/
