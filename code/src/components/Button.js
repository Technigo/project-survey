import React from 'react'

const Button = (props) => {
  switch (props.type) {
    case 'next' :
      return (
        <input 
          type="button"
          onClick={props.next}
          value="Next">
        </input>

      )
    case 'previous' :
      return (
        <input 
          type="button"
          onClick={props.previous}
          value="Previous">
        </input>

      )
    default :
    return (
      <p>Error!</p>
    )

  }
}

export default Button