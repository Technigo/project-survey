import React from 'react'

const NextButton = ({ changePage, retrieveData, state }) => {
  return (
    <button 
      disabled={!state}
      onClick={() => {
        changePage(); retrieveData(state)
      }}>Next
    </button>
  )
}

export default NextButton;