import React from 'react'

import { Progress } from 'Components/Progress'

export const Select = ({ food, setFood }) => {
    return (
        <form>
            <Progress current='3' total='3'/> 
            <h2>Here we go: select your favourite sweet from the dropdown! Hold on! You can choose only one Sweetie!</h2>
            <select
                required
                onChange={event => setFood(event.target.value)}
                value={food}
            >
                <option value='Select'>Select</option>
                <option value='Kanelbulle'>Kanelbulle</option>
                <option value='Plum bukta'>Plum bukta</option>
                <option value='Cherry pie'>Cherry pie</option>
                <option value='Macaron'>Macaron</option>
                <option value='Bombolone'>Bombolone</option>
                <option value='Pastel de Nata'>Pastel de Nata</option>
                <option value='Waffle'>Waffle</option>
            </select>
        </form>
    )
}