import React from 'react';
import { DivisibleByThree } from './DivisableBy3';

export const InfoBanner = (props) => {
    const counter = props.counter;
    if (counter % 2 === 0 || counter % 3 === 0) {
        return (
            <div>
                <DivisibleByThree/>
                <p>The Counter is even </p>
            </div>
        )
    } else {
        return (
        <div>
        <p>The Counter is odd </p>
    </div>
        )
    }
} //we are only looking n the counter here and depending on display stuff, 
//the counter is in teh state so with every change we check our condition
// the rest or modula of the result is it divideble with two so if it is odd or even number
// props is odd or even





