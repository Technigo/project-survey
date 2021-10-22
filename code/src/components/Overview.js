import React from "react"


const Overview = ({ nameInput, quantity, plantFeature, careQuality, gradeIndex }) => {

    return (
        <section aria-label="overview-survey" className="overview-container">
            <h2 className="overview-text">Thank you, {nameInput}, for filling this survey out!</h2>
            <p className="summary-text">Summary of your answers:</p>
            <ul className="list-overview">
                <li className="list">You have <span className="answers">{quantity} plants</span> at home</li>
                <li className="list">For you <span className="answers">the most important </span> in plants is <span className="answers">{plantFeature}</span></li>
                <li className="list">Your plants would rate your <span className="answers">care</span> as <span className="answers">{careQuality} out of 10</span></li>
                <li className="list">Your <span className="answers">knowledge </span> about plant care is <span className="answers">{gradeIndex}/5</span></li>
            </ul>
        </section>
    )
}

export default Overview