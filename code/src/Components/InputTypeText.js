import React from 'react'

// import './inputTypeText.css'

export const InputTypeText = ({className, header, name, setName, placeholder}) => {
  return (
      <>
        <h3>{header}</h3>
        <label>
            <input
                className={className}
                type="text" 
                value={name} 
                onChange={event => setName(event.target.value)}
                placeholder={placeholder}
                required
            />
            </label>
        </>
    );
};