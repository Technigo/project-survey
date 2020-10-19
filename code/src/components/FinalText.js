import React from "react";
import 'components-css/finaltext.css';

const restart = () => {
    document.location.href = "";
  };

export const FinalText = (props) => {
return (
    <section className="final-text" >
        <p id="final-text">On your dream vacation you'll find yourself chillin' at the {props.resultDestination} with {props.resultNumber} of your best friends, drinking cocktails during the {props.resultDay}.</p>
        <button onClick={restart}>Refresh Page</button>
    </section>
    )
};