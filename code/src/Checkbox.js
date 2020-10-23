import React from 'react'

export const Checkbox = ({ contactme, onContactmeChange}) => {
    
    return (
        <div className="checkbox-group">
            
            <div className="checkbox-container">
            <label htmlFor="newsletter">Newsletter</label>
            <input
            id="newsletter"
            type="checkbox"
            checked={contactme.includes('newsletter')}
            onChange={() => onContactmeChange('newsletter')}
            required
            />
            <span className="custom-checkbox"></span>
            </div>
           
            <div className="checkbox-container">
            <label htmlFor="gdpr">GDPR</label>
            <input
            id="gdpr"
            type="checkbox"
            checked={contactme.includes('gdpr')}
            onChange={() => onContactmeChange('gdpr')}
            required
            />
            <span className="custom-checkbox"></span>
            </div>
        </div>

            
    )
}