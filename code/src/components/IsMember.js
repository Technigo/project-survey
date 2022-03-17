import React from "react"


const IsMember = ({
    nextQuestion,
    member,
    setMember
  }) => {

    const onMemberClick = (event) => {
        setMember(event.target.value)
        nextQuestion()
    }
    return (
        <form>
            Are you a member?
            <label>
                <input 
                  type="radio"
                  name="isMember"
                  value="Yes"
                  onChange={onMemberClick}
                  checked={member === "Yes"}
                />
                Yes
            </label>
            <label>
                <input 
                  type="radio"
                  name="isMember"
                  value="No"
                  onChange={onMemberClick}
                  checked={member === "No"}
                />
                No
            </label>
        </form>
    )
}

export default IsMember