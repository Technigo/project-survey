import React from 'react'

const Filler = (props) => {
  return (
    <div className="filler" style={{width: `${props.progress}%`}}>
    </div>
  )
}

export default Filler