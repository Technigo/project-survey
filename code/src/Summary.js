import React from 'react'
import 'summary.css'

export const Summary = (item) => {
  console.log(item.wanstNewsletter)
  return (
    < section >
      <h1>...And here's the summary for {item.name}.</h1>
      <p>You're from {item.location}.</p>
      <p>You belong to the age group {item.ageGroup}.</p>
      <p>Your favorite color is {item.color}.</p>
      {item.wanstNewsletter && <p>You have subscribed to our newsletter.</p>}
      {!item.wanstNewsletter && <p>You haven't subscribed to our newsletter.</p>}
    </section >
  )
}