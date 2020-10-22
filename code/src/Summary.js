import React, {useState} from 'react'

export const Summary = ({age, type, price}) => {
    return (
        <section>       
            <h2>Your response:</h2>
                <div>
                    <p>{age}</p>
                    <p>{type}</p>
                    <p>{price}</p>
                </div>             
        </section>
    );
};