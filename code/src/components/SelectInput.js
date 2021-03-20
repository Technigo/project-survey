import React from 'react';

const SelectInput  = ({ QuestionAlternative, setAlternative }) => {
    const onAlternativeChange = (e) => {
        console.log(e)
          setAlternative(e.target.value)
    }
    return (
    <option 
        onChange={(e) => {
            onAlternativeChange(e)
        }}
        >{QuestionAlternative}
    </option>
    )
}
 
export default SelectInput;