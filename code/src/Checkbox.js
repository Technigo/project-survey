import React from 'react'

export const Checkbox = ({ contactme, onContactmeChange}) => {
    
    return (
        <div>
            <label htmlFor="newsletter">Newsletter</label>
            <input
            id="newsletter"
            type="checkbox"
            checked={contactme.includes('newsletter')}
            onChange={() => onContactmeChange('newsletter')}
            />

            <label htmlFor="gdpr">GDPR</label>
            <input
            id="gdpr"
            type="checkbox"
            required
            checked={contactme.includes('gdpr')}
            onChange={() => onContactmeChange('gdpr')}
            />
          </div>
    )
}