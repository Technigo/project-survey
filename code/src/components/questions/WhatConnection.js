import React from "react"
import SelectDropdown from "../inputTypes/SelectDropdown"

const Connection = ({
  role, 
  setRole,
  onStepChange,
}) => {
  const roles = [
    {value: 'teacher', description: 'Codecoach'},
    {value: 'student', description: 'Fellow student'},
    {value: 'recruiter', description: 'Recruiter'},
    {value: 'friend', description: 'Friend'},
    {value: 'other', description: 'Other'}
  ]

  return (
    <form>
      <label> What's your connection to Birgit?
        <SelectDropdown
          optionValue={role}
          setOptionValue={setRole}
          valueArray={roles}
        />
      </label> 
      <button 
        disabled={role === ''}
        onClick={onStepChange}>Next question <span><b>>></b></span>
      </button>
    </form>  
  )
}

export default Connection