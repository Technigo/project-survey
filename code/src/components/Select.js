import React from 'react'

import { Option } from 'components/Option'

export const Select = ({ageValue, setAgeValue, questions}) => {
    console.log("from select component", ageValue)
    return (
        <select 
			defaultValue={ageValue} 
			onChange={setAgeValue}>
			{<option value="default" disabled hidden>Choose age</option>}
			{questions.age.map((a) =>
                <Option
                    value = {a}
                />
			)}
		</select>
    )
}
