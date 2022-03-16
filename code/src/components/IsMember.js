import React from "react"


const IsMember = ({nextQuestion}) => {
    const onMemberClick = (event) => {
        IsMember(event.target.value)
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
                />
                Yes
            </label>
            <label>
                <input 
                  type="radio"
                  name="isMember"
                  value="No"
                  onChange={onMemberClick}
                />
                No
            </label>
        </form>
    )
}

export default IsMember