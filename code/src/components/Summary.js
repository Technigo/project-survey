import React from "react";


const Summary = ({ nameInput, flavourInput, sizeInput, onStepChange}) => {
return (

<div className="question-box">
<div className="summary-text">
<p>Thanks for using our service! Below is a summary of the information you have provided. You will receive your macaron box within 24 hours.</p>
</div>

<div className="summary" tabindex='0'>
<p>Name: {nameInput}</p>
<p>Selected flavour: {flavourInput} </p>
<p>Size of macarons: {sizeInput}</p>

</div>

<h2 div className="end-text">ENJOY!!!!</h2>


</div>
);
};


export default Summary;