import React from "react";


const Summary = ({ nameInput, flavourInput, sizeInput, onStepChange}) => {
return (
<div className="summary" tabindex='0'>

<p>Thanks for using our service! Below is a summary of the information you hava prrovided. You wil receive your macaron box within 24 hours.</p>
<p>Name: {nameInput}</p>
<p>Flavours: of macarons</p>
<p>Size: {sizeInput} of macarons</p>

{flavourInput} 

<h2>ENJOY!!!!</h2>

<div className="button-wrapper">
<button
onClick={onStepChange}>OK, next!!!</button>
</div>

</div>
);
};


export default Summary;