import React, { useState } from 'react';

const Form = () => {
    const [inputLiving, setinputLiving] = useState('');
    const [inputStyle, setinputStyle] = useState('');
    

    const oninputLivingChange = (kiwi) => {
        console.log(kiwi.target.value);
        setinputLiving(kiwi.target.value);
    }
  

    const oninputStyleChange = (banana) => {
        console.log(banana.target.value);
        setinputStyle(banana.target.value);
    }
    
    const handlesubmitButton = (horse) => {
        console.log(horse);

    }

    return (
        <form>
            <div>
                <label>
                    <p>Choice of living:</p>
                        <label>appartment
                            <input 
                                id="appartment"
                                type="radio"
                                value={inputLiving}
                                onChange={oninputLivingChange}
                            />
                        </label>
                        <label>house
                            <input 
                                id="house"
                                type="radio"
                                value={inputLiving}
                                onChange={oninputLivingChange}
                            />
                        </label>
                </label>
            </div>
            <div>
                <label>
                    style
                    <select id="style" value={inputStyle} onChange={oninputStyleChange}>
                        <option value={inputStyle} onChange={oninputStyleChange}>Select a style</option>
                        <option value={inputStyle} onChange={oninputStyleChange}>Funkis</option>
                        <option value={inputStyle} onChange={oninputStyleChange}>Sekelskifte</option>
                        <option value={inputStyle} onChange={oninputStyleChange}>Newbuilt</option>
                        <option value={inputStyle} onChange={oninputStyleChange}>Sixties</option>
                        <option value={inputStyle} onChange={oninputStyleChange}>Architect</option>
                    </select>
                </label>
            </div>
            <div className="submit-button">
                <button 
                id="submit-button"
                type="submit"
                value="Submit"
                onClick={handlesubmitButton}>Submit</button> 
            </div>
        </form>
    )
}
export default Form;