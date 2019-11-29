import React from 'react';
import 'Components css/Summary.css'


export const Summary = (props) => {
    return (
        <div id="review" className="Review">
            <div>

                <h2>Thank you {props.name}!</h2>
                <h5>Your order will be ready in a minute: </h5>
                <li> A {props.burger} burger with {props.bread} bread to {props.delivery}!</li>
                <h6>Enjoy!</h6>

            </div>
        </div>
    )
}