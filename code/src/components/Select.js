import React from 'react'

import { Option } from 'components/Option'

export const Select = ({ageValue, setAgeValue, questions}) => {
    return (
        <select 
			defaultValue={ageValue} 
			onChange={event => setAgeValue(event.target.value)}>
			{<option value="default" disabled hidden>Choose age</option>}
			{questions.age.map((a) =>
                <Option
                    value = {a}
                />
			)}
		</select>
    )
}
