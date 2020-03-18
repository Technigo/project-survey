import React from 'react';

export const Dropdown = (props) => {
    const { question, title, array, setDropdownItem } = props;

    return (
        <div>
            <h2>{question}</h2>
            <label className='dropdown'>
                <select 
                    className='dropdown-style'
                    onChange={event => setDropdownItem(event.target.value)}
                    required
                >
                    <option value=''>{title}</option>
                    {array.map(dropdownItem => (
                    <option key={dropdownItem} value={dropdownItem}>{dropdownItem}</option>
                    ))} 
                </select>
            </label>
        </div>
    );
};

