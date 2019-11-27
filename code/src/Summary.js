import React, { useState } from 'react';
import 'Components css/Summary.css'


export const Summary = (props) => {
    return (
        <div id="review" className="Review">
            <div className="summaryReview">

                <h2>Thank you for your order {props.name}!</h2>
                <p>Your order: </p>
                <p> A {props.burger} burger and {props.bread} bread to {props.group} whill be ready in a minute!</p>

            </div>
        </div>
    )
}