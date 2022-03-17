import React from "react"
import './overview.css'
import pic1 from 'IMG/PIC1.jpg'

const Extra1 = ({ onStepChange }) => {

    return (    
    <div className="extra-section">
        <img className="extra-img" src={pic1} alt="Art"/>
        <div className="extra-description">
            <h4 className="extra-text">Look at this piece of art</h4>
        </div>
        <button onClick={onStepChange}>Next</button>
    </div>
    )
}
 
export default Extra1