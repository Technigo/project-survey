import React from 'react'


const Result = (props) => {
  console.log(props.personality);
  const categoryName = `category-${props.personality}`;
  console.log(props.color)
  
  return (
    <section className="business-card-result">
    <h1 className="result-header">Tadaaa!</h1>
    <div className={`business-card ${props.color}`}>
      <h1 className={categoryName}>{props.name}</h1>
      <h2 className={categoryName}>{props.occupation}</h2>
      <h3 className={categoryName}>{props.email}</h3>
      <h3 className={categoryName}>{props.telephone}</h3>
      
    </div>

    <p className="result-text">Here is Your business card!</p> <p className="result-text">Take a screenshot and send it to your friends!</p>
    <button className="return-button" onClick={() => props.setSubmitted(false)}>Make another one!</button>
    </section>
  )
}

export default Result;