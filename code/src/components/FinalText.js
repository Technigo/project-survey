import React from "react";
import 'finaltext.css';

export const FinalText = (props) => {
return <p className="final-text" id="final-text">Your chosen day is: {props.resultDay}, chosen color is: {props.resultColor}, chosen number is: {props.resultNumber}</p>
};