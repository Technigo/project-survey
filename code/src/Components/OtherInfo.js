import React from 'react'

export const OtherInfo = ({ formData, setFormData }) => {
    return(
      <div className="other-info-container">
        <form>
        <select value={formData.nationality} onChange={(event) => setFormData({...formData, nationality: event.target.value})}>
        <option value="Space X">Space X</option>
        <option value="NASA">NASA</option>
        <option value="Voyager">Voyager</option>
        </select>
        </form>
      </div>
    );
  }