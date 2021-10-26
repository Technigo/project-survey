import React from "react"

const FourthQuestion = ({ badSin, onBadSinChange }) => {
    return (
        <div className="container">
        <form>
            <label>
                <h2>How bad is your sin?</h2>
            <select
                className="formControl" 
                value={badSin}
                required
                onChange={onBadSinChange}
                >
                    <option value="">Select Hail Mary's (HMs)</option>
                    <option value="1-2 HMs">1-2 HMs</option>
                    <option value="3-5 HMs">3-5 HMs</option>
                    <option value="6-10 HMs">6-10 HMs</option>
                    <option value="eternal punishment">Eternal punishment</option>
            </select>
                </label>
        </form>
        </div>
    )
}
export default FourthQuestion
