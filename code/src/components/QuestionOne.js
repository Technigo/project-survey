import React from 'react'



const Mediaunits = ({devicePick, onMediaSelect, onNextChange }) => {
    return (
            <div>
                
                <h2>Pick preferd media device</h2>
                <select value={devicePick}
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
                <button onClick={onNextChange}>Next question</button>
                </div>
                
    )
}

export default Mediaunits