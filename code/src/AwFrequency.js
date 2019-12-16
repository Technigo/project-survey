import React from 'react'

export const AwFrequency = (props) => {
    return (
        <div className="awFrequency">
            <h3>How often do you want to have Afterworks?</h3>
            {props.awFrequencies.map((frequency) => (
                <label key={frequency}>
                    <input
                        checked={props.awFrequency === frequency}
                        onChange={() => props.setAwFrequency(frequency)}
                        type="radio"
                        value={frequency} />
                    {frequency}
                    <br />
                </label>))}
        </div>)
}