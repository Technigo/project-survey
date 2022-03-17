import React from "react"

const QuestionSingleCheckoxLikeSports = (props) => {
  const { likeSports, onLikeSportsChange } = props
console.log(likeSports)
  return (
    <div className="q-and-a-box">
      <h1>Check this box if you like watching sports on TV</h1>

      <div className="checkbox-box">
        <label htmlFor="likeSports"></label>
        <input
          id="likeSports"
          type="checkbox"
          checked={likeSports}
          onChange={onLikeSportsChange}
        />
      </div>

      {/* <div className="checkbox-box">
        <label htmlFor="cucumber">cucumber</label>
        <input
          id="cucumber"
          type="checkbox"
          // value="cucumber"
          // checked={ingredient.includes("cucumber")}
          // onChange={() => onIngredientChange("cucumber")}
        />
      </div> */}
    </div>
  )
}

export default QuestionSingleCheckoxLikeSports
