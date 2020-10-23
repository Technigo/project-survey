import React from 'react'
// import './summary.css'

export const Summary = (props) => {
    const {name, activity, color} = props
  return (
        <section className="summary">
          <p>Hello {name}! You want to {activity.toLowerCase()} on halloween and your favourite color is {color.toLowerCase()}.</p>
        </section>
    );
};