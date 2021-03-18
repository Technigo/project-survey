import React from 'react'
import Buttons from './Buttons'

const Summary = (props) => {
  return (
    <>
      {props.step === 6 && (
        <>
          <div className="summary-div">
            <p className="summary-text">You are the <span className="span-bold">{props.animal} </span> <span className="span-bold">{props.name} </span>
              that loves wearing <span className="span-bold">{props.accessory} </span>
              and prefers to <span className="span-bold">{props.activity} </span>
              rather than <span className="span-bold">{props.ratherNot} </span>
            </p>
          </div>
          <Buttons
          className="btn start-btn"
          step={props.restart}
          btnText="Restart"
          />
      </>
      )}
      
    </>
  )
}
export default Summary