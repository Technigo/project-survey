import React from 'react'


const Result = (props) => {
  console.log(props.personality);
  const categoryName = `category-${props.personality}`;
  console.log(props.color)
  
  return (
    <>
    <h1 className="h1">Tadaaa!</h1>
    <div className={`business-card ${props.color}`}>
      <h1 className={categoryName}>{props.name}</h1>
      <h2 className={categoryName}>{props.occupation}</h2>
      <h3 className={categoryName}>{props.email}</h3>
      <h3 className={categoryName}>{props.telephone}</h3>
      
    </div>

    <p>Here is Your business card! Take a screenshot and send it to your friends!</p>
    </>
  )
}

export default Result;