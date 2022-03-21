import React from "react"


const IsMember = ({ nextQuestion, member, setMember }) => {

  const onMemberClick = (event) => {
    setMember(event.target.value)
    nextQuestion()
  }
  return (
    <form className="main-card">
      <p>Are you a member?</p>
      <label htmlFor="isMember">
        <input
          type="radio"
          name="isMember"
          value="Yes"
          onClick={onMemberClick}
        />
        Yes
        <input
          type="radio"
          name="isMember"
          value="No"
          onClick={onMemberClick}
        />
        No
      </label>
    </form>
  )
}

export default IsMember