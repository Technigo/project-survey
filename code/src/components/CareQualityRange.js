import React from "react"

import Button from "./Button"

const CareQualityRange = ({ careQuality, OnCareQualityChange }) => {
    return (
        <>
            <label>
                <h2 className="label-title">If your plants could talk, how would they describe their quality of care?</h2>
            </label>
            <div className="range-container">
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={careQuality}
                    onChange={OnCareQualityChange}
                    className="range"
                    aria-label="Navigate with arrows and then press Enter"
                />
                <span role="img" aria-label="emoji" className="range-number">{careQuality} 💧</span>
            </div>
            <Button button="SUBMIT" />
        </>
    )
}

export default CareQualityRange