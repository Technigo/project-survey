import React from "react"
import './radio.css'

const Radio = ( {
    nameInput,
    purpose,
    onPurposeChange,
    onStepChange
} ) => {
    return (
        <form>
            <div className="question-container">
                <p className="question-heading">Why are you here?</p>
                <p>Ok {nameInput} - let's start! First, let us know what brings you here?</p>
                <div className="element-container">
                    <label>
                        <input
                            type="radio"
                            name="purpose"
                            value="business"
                            onChange={() => onPurposeChange('business')}
                            checked={purpose === 'business'}
                        />
                        Business 👩🏼‍💼 
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="purpose"
                            value="pleasure"
                            onChange={() => onPurposeChange('pleasure')}
                            checked={purpose === 'pleasure'}
                        />
                        Pleasure 💃🏼 
                    </label>
                    <button className="btn" onClick={onStepChange}>ok ✓</button>
                </div>
            </div>
        </form>
    )
}

export default Radio