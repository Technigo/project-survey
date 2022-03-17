import React from "react"
import './overview.css'
import pic2 from 'IMG/PIC2.jpg'

const Extra2 = ({ onStepChange }) => {

    return (    
    <div className="extra-section">
        <img className="extra-img" src={pic2} alt="Art"/>
        <div className="extra-description">
            <h4 className="extra-text">Im judging u here like</h4>
        </div>
        <button onClick={onStepChange}>Next</button>
    </div>
    )
}
 
export default Extra2