import React from "react"

const Recommend = ({recommend, setRecommend}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        <p>How likely is it, that you would recommend the portfolio to a friend or colleague?</p>
        <input
          type="range"
          onChange= {event => setRecommend(event.target.value)}
          value= {recommend}
          min="1" 
          max="5"
        />  
      </form>
  )
}

export default Recommend