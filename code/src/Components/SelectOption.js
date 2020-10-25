import React from 'react';

export const SelectOption = ({className, header, array, selected, setSelected}) => {
    return (
        <>
            <h3 tabIndex="0">{header}</h3>
            <select 
                className={className}
                onChange={event => setSelected(event.target.value)}
                value={selected}
            >
            
            {array.map(activity => (
                <option key={activity} value={activity}>{activity}</option>
            ))};            
            </select>
        </>
    );
}