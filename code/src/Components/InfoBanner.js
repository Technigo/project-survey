import React from 'react';
import { DivisibleBy3 } from 'Components/DivisibleBy3'
import { DivisibleBy5 } from './DivisibleBy5';

export const InfoBanner = (props) => {
    const counter = props.counter;
    if (counter % 2 === 0 || counter % 3 === 0) {

        return ( 
            <div>
                <DivisibleBy3 />
                <p>The counter is even</p>
            </div>
            )
    } else {
        return (
            <div>
                <p>The counter is odd</p>
            </div>
        )
    }
}