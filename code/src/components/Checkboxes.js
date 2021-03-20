import React from 'react'

import './Checkboxes.css'

const Checkboxes = ({agreeTerms, setAgreeTerms, setAgreeNewsletter, agreeNewsletter}) => {
  const onAgreeTermsChanged = () => {
    setAgreeTerms(!agreeTerms)
  }
  
  const onAgreeNewsletterChanged = () => {
    setAgreeNewsletter(!agreeNewsletter)
  }
  return(
    <div className="checkboxes-container">
      <div className="checkbox-label-container">
        <input 
          id="terms" 
          type="checkbox"
          checked={agreeTerms}
          onChange={onAgreeTermsChanged}
        />
        <label htmlFor="terms" className="checkbox-label">Do you agree with Tems and Condition?</label>
      </div>
      
      <div className="checkbox-label-container">
        <input 
          id="newsletter" 
          type="checkbox"
          checked={agreeNewsletter}
          onChange={onAgreeNewsletterChanged}
        />
        <label htmlFor="newsletter" className="checkbox-label">Would you like to receive our newsletter?</label>
      </div>
    </div>
  )
}

export default Checkboxes
