import React from 'react'

export const SummaryWrapper = ({activity, month, temperature}) => {
  return (
    <section className="summary-section">
       <h4>So, <span>{activity}</span> in <span>{month}</span> with <span>{temperature}</span> lovely degrees - that sounds like a great summer day..!</h4>
    </section>
  )
}