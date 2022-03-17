import React from "react"

const AgeGroup = ({
    nextQuestion,
    ageGroup,
    setAgeGroup
}) => {
    const onAgeGroupSelect = (event) => {
        setAgeGroup(event.target.value)
        nextQuestion()
    }
    return (
        <form>
            <select
              onChange={onAgeGroupSelect}
              value={ageGroup}
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