import React from "react"
import RangeSlider from "../inputTypes/RangeSlider"

const Recommendation = ({recommend, setRecommend}) => {
  return(
    <form>
      <label>How likely is it, that you would recommend the portfolio to a friend or colleague?  
        <RangeSlider
          value={recommend}
          setValue={setRecommend}
          min={1}
          max={5}
        />
      </label>
    </form>
  )
}

export default Recommendation