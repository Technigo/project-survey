import React from 'react'

const Result = (props) => {
  return (
    <>
    <h1 className="h1">Tadaaa!</h1>
    <div className="business-card">
      <h2 className="category-cute">{props.name}</h2>
      <h2 className="category-cute">{props.occupation}</h2>
      <h2 className="category-cute">{props.email}</h2>
      <h2 className="category-cute">{props.telephone}</h2>
      
    </div>

    <p>Here is Your business card! Take a screenshot and send it to your friends!</p>
    </>
  )
}

export default Result;