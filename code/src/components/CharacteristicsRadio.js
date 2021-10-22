import React from "react"

import Button from "./Button"

const CharacteristicsRadio = ({ plantFeature, onPlantFeatureChange }) => {

    const plantFeatures = ["aesthetic pleasure", "color", "easy maintenance", "rarity", "air-purifying feature", "mood booster"]

    return (
        <>
            <p className="label-title">What is the most important for you when you buy a plant?</p>
            <section className="radio-buttons-container">
                {plantFeatures.map((feature) => (
                    <label key={feature} htmlFor="plantProperty" className="label-feature">
                        <input
                            id="plantProperty"
                            type="radio"
                            name="feature-type"
                            value={feature}
                            onChange={onPlantFeatureChange}
                            checked={plantFeature === feature}
                            aria-label="Navigate with arrows and then press Enter"
                            required
                            className="input-radio"
                        />
                        {feature}
                    </label>
                ))}
            </section>
            <Button button="NEXT" />
        </>
    )
}

export default CharacteristicsRadio