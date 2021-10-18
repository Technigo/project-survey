import React from "react"

const Characteristics = ({ plantFeature, onPlantFeatureChange, onStepChange }) => {

    const plantFeatures = ["aestetic", "color", "maintenance (easy to care)", "rarity"]

    return (
        <>
            <p>What is the most important for you in a plant?</p>
            {plantFeatures.map((feature) => (
                <label key={feature}>
                    <input
                        type="radio"
                        value={feature}
                        onChange={onPlantFeatureChange}
                        checked={plantFeature === feature}
                    />
                    {feature}
                </label>
            ))}
        </>
    )
}

export default Characteristics