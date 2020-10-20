import React from "react";
import 'components-css/finaltext.css';

const restart = () => {
    document.location.href = "";
  };

export const FinalText = (props) => {
return (
    <section className="final-text">
        <div className="final-result-container" id="final-text">
            <img className="final-img" src="assets/final-img.png" alt=""/>
            <p className="dream-text">On your dream vacation </p>
            <p className="result-text">...you'll find yourself chillin' at the {props.resultDestination} with {props.resultNumber} of your best friends, drinking cocktails during the {props.resultDay}.</p>
            <button className="restart-button" onClick={restart}>Refresh Page</button>
        </div>
    </section>
    )
};