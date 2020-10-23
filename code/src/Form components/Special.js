import React from 'react'

export const Special = ({special, setSpecial}) => {
    
    return (
        <div className="input-container">
            <h3>Why would you choose Craft Beer Co. products over other craft beer brands? </h3>
            <label>
                    <input className="text-input no-outline"
                        type="text"
                        onChange={event => setSpecial(event.target.value)}
                        value={special}
                        placeholder="Please write here..."
                    />             
            </label>
        </div>   
    );
};