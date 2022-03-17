import React from 'react'



const Mediaunits = ({devicePick, onDeviceChange }) => {
    return (
            <form>
                
                <h2>Pick preferd media device</h2>
                <select value={devicePick}
                    onChange={onDeviceChange}> 

                    <option value="">Select a device</option>
                    <option value="mobilephone">Mobile phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="pc">PC</option>
                    <option value="laptop">Laptop</option>
                    <option value="smartwatch">Smartwatch</option>
                    <option value="smart-tv">Smart Tv</option>
                    <option value="smartfridge">Smart fridge</option>
                    
                </select>
                </form>
    )
}

export default Mediaunits