import React from "react"

const ReturnButton = (props) => {
  const { setSummary } = props
  const handleReturn = () => {
    setSummary(false)
  }
  return (
    <button 
    className="return-button"
    onClick={handleReturn}
    >
      Again?
    </button>
  )
}

export default ReturnButton