import React from "react";
import 'components-css/finaltext.css';

export const FinalText = (props) => {
return <p className="final-text" id="final-text">On your dream vacation you'll find yourself chillin' at the {props.resultDestination} with {props.resultNumber} of your best friends, drinking cocktails during the {props.resultDay}.</p>
};

/* Add refresh button to start survey all over */