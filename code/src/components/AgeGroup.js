import React from "react"

const AgeGroup = ({nextQuestion}) => {
    const onAgeGroupSelect = (event) => {
        AgeGroup(event.target.value)
        nextQuestion()
    }
    return (
        <form>
            <select
              onChange={onAgeGroupSelect}
            >
            <option value="<18"> Under 18 </option>
            <option value="19-39"> 19 - 39 </option>
            <option value="40-60"> 40 - 60 </option>
            <option value=">18"> Over 60 </option>

            </select>
        </form>
    )
}

export default AgeGroup