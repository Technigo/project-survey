import React from 'react'



const Mediaunits = ({devicePick, onMediaSelect, onNextChange,onBackChange }) => {
    return (
            <section className="container">
                <div className="q-1">
                <h2>Pick preferred media device</h2></div>
                <select 
                className="dropdown"
                value={devicePick}
                onChange={onMediaSelect}> 

                    <option value="">Select a device</option>
                    <option value="mobile phone">Mobile phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="pc">PC</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartwatch">Smartwatch</option>
                    <option value="smart tv">Smart Tv</option>
                    <option value="smart fridge">Smart fridge</option>
                    
                </select>
                <button className="btn" onClick={onBackChange}>Back</button>
                <button onClick={onNextChange} className="btn">Next question</button>
            </section>
                
    )
}

export default Mediaunits