import React from 'react'
import '../index.css'
import '../conclusion.css'

const conclusion = ({ purchase, subscriptionQ, often, missing }) => {
  return (
    <>
      <h2>Thank you for completing this short survey! 💕</h2>
      <h3>You answered:</h3>
      <section className="list">
        <ul>
          <li><span className="summary">Weekly purchases:</span> {purchase}</li>
          <li><span className="summary">Active subscription:</span> {subscriptionQ}</li>
          <li><span className="summary">Mostly purchased:</span> {often}</li>
          <li><span className="summary">Missing on menu:</span> {missing}</li>
        </ul>
      </section>

      <section className="related-link">
        <a
          href="https://www.hsph.harvard.edu/nutritionsource/healthy-drinks/other-healthy-beverage-options/"
          rel="noopener noreferrer"
          target="_blank"
          title="Learn more about the health benefits of coffee and tea">
            -Health benefits of drinking coffee and tea-
        </a>
      </section>
    </>
  )
}

export default conclusion