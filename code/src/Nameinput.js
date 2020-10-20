import React from 'react'

export const Nameinput = (props) => {
    const { name, setName, id } = props;

    return (
    <input 
    type="text"
    onChange={event => setName(event.target.value)}
    value={name}
    id={id}
    placeholder="Type your name here"
    required
   /> 

   );
};
