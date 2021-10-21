import React from "react"

const Summary = ({
  role, 
  visualAppearance,
  color,
  text,
  recommend,
  improve,
  additional,
  addText
}) => {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <p className="summary-text">You are a {role}</p>
      <p className="summary-text">You give the visual Appearance of the Portfolio a rating of {visualAppearance}</p>
      <p className="summary-text">You {color === 'yes'?'like':'do not like'} the color choice of the Portfolio-page</p>
      <p className="summary-text">Additional comments: {additional}</p>
      <p className="summary-text">You {text === 'yes'?'like':'do not like'} the provided information in the introduction</p>
      <p className="summary-text">Additional comments: {addText}</p>
      <p className="summary-text">It is {recommend >= 4 ? 'likely': (recommend < 3 ? 'unlikely' : 'not sure')} that you would recommend this Portfolio-Page to a friend or colleague.</p>
      <p className="summary-text">The page can be improved by: {improve}</p>
      <a className="footer-link" href="https://www.nehrwein.com/" target="_blank" rel="noopener noreferrer">Visit my Portfolio!</a>
      <p className="footer">© BumBumBurka</p>
    </div>
  )
} 

export default Summary
