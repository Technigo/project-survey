import React from 'react'

export const Dropdown = (props) => (
    <div className="comeback">
        <select
          onChange={(event) => props.setTreatment(event.target.value)}
          value={props.treatment}
        >
          <option value="">Select treatment:</option>
          <option value="Cut">Cut</option>
          <option value="Colour">Colour</option>
          <option value="Shave">Shave</option>
        </select>
        </div>
    );