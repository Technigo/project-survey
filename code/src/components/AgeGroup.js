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
        <form className="main-card">
            <label htmlFor="ageGroup">Please select your age group</label>
            <select
                onChange={onAgeGroupSelect}
                value={ageGroup}
                namge="ageGroup"
            >
                <option> Age group</option>
                <option value="Under 18"> Under 18 </option>
                <option value="19-39"> 19 - 39 </option>
                <option value="40-60"> 40 - 60 </option>
                <option value="Over 18"> Over 60 </option>

            </select>
        </form>
    )
}

export default AgeGroup