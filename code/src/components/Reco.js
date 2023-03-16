import React from 'react'

export const Reco = ({ reco, setReco }) => {
  const handleRecoChange = (event) => {
    setReco(event.target.value)
  }
  return (
    <div className="recoForm">
      <p>How likely is it that you would recommend me? (0-100%)</p>
      <input
        type="range"
        min="1"
        max="100"
        value={reco}
        onChange={handleRecoChange}
        className="recoSlider" />
    </div>
  )
}