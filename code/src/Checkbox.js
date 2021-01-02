import React from 'react';

export const Checkbox = ({ contactme, onContactmeChange }) => {

    return (
        <>
            <div>
                <h1 className="typewriter" tabIndex="0">Do you mind if I..?</h1></div>
            <div className="checkbox-group">

                <div className="checkbox-container">
                    <label htmlFor="newsletter">Send you some juicy newsletters?</label>
                    <input
                        id="newsletter"
                        type="checkbox"
                        checked={contactme.includes('newsletter')}
                        onChange={() => onContactmeChange('newsletter')}
                        required
                        tabIndex="0"
                    />
                    <span className="custom-checkbox" tabIndex="0"></span>
                </div>

                <div className="checkbox-container">
                    <label htmlFor="gdpr">Collect your personal information? </label>
                    <input
                        id="gdpr"
                        type="checkbox"
                        checked={contactme.includes('gdpr')}
                        onChange={() => onContactmeChange('gdpr')}
                        required
                    />
                    <span className="custom-checkbox" tabIndex="0"></span>
                </div>
            </div>
        </>

    );
};