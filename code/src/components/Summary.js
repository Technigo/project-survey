import React from 'react'

// This should be the summary page that displays after the user has clicked the 'submit'-button

//return object or array of user answers (events/such as Max stored and displayed states. It can still accumulate here but it is display none until button is clicked)

export const SummaryWrapper = ({activity, month, temperature}) => {
  return (
    <section className="summary-section">
       <h4>So, <span>{activity}</span> in <span>{month}</span> with <span>{temperature}</span> lovely degrees - that sounds like a great summer day..!</h4>
    </section>
  )
}