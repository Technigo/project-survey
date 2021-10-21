import React from "react"
import RangeSlider from "../inputTypes/RangeSlider"

const VisualAppearance = ({
  visualAppearance, 
  setVisualAppearance,
  onStepChange,
}) => {
  return(
    <form>
      <label> How visually appealing is the shown header section to you?
        <RangeSlider
          value={visualAppearance}
          setValue={setVisualAppearance}
          min={1}
          max={5}
        />
      </label>
      <button onClick={onStepChange}>Next question</button>   
    </form>
  )
}

export default VisualAppearance