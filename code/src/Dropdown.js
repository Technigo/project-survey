import React from 'react'

export const Dropdown = (props) => (
    <div className="comeback">
        <select
          onChange={(event) => props.setLocation(event.target.value)}
          value={props.location}
        >
          <option value="">Select location:</option>
          <option value="stockholm">Stockholm</option>
          <option value="barcelona">Barcelona</option>
          <option value="oslo">Oslo</option>
        </select>
        </div>
    );