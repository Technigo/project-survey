import React from "react"
import RangeSlider from "../inputTypes/RangeSlider"

const VisualAppearance = ({visualAppearance, setVisualAppearance}) => {
  return(
    <form>
      <label> How visually appealing is the header section to you?
        <RangeSlider
          value={visualAppearance}
          setValue={setVisualAppearance}
          min={1}
          max={5}
        />
      </label>   
    </form>
  )
}

export default VisualAppearance