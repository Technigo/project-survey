import React, { useState } from 'react';
import 'Components css/Summary.css'


export const Summary = (props) => {
    return (
        <div id="review" className="Review">
            <div className="summaryReview">

                <h2>Thank you for your order {props.name}!</h2>
                <p>You ordered: </p>
                <p> A {props.burger} burger with {props.bread} bread to {props.group} will be ready in a minute!</p>

            </div>
        </div>
    )
}