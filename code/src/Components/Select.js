import React from 'react';

const Select = (props) => {

    /* Sending in numberOfPlants and onSelectChange as props */
    const {numberOfPlants, onSelectChange } = props

    return (
        <section className='question2-wrapper'>
            <h3 className="question-header"> 
                2. How many plants do you have at home? 
                <span role="img" aria-label='cactus'> 🌵 </span> 
            </h3>

            <label> Choose an approximate number: </label>
            <select 
            onChange={event => onSelectChange(event.target.value)}
            value={numberOfPlants}
            required>
            <option value=''> Select a number: </option>
            <option value='1-5'>1-5</option>
            <option value='5-10'>5-10</option>
            <option value='10-15'>10-15</option>
            <option value='15-20'>15-20</option>
            <option value='15-20'>20-25</option>
            </select>
        </section>
    )
}

export default Select;