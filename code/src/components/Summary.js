import React from 'react'



const Summary = (props) => {

  return (

    <div>
      <p>Hello {props.name}</p>
      <p>So, your favoritefruit is {props.fruit}!</p>
      <p>You eat {props.howManyFruits} fruits per day, really?</p>
    </div>

  )
}

export default Summary