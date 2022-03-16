import React from 'react'

export const OtherInfo = ({ formData, setFormData }) => {
    return(
      <div className="other-info-container">
        <input type="text" placeholder="Nationalty..." value={formData.nationality} onChange={(event) => setFormData({...formData, nationality: event.target.value})} />
        <input id="text" placeholder="Other..." value={formData.other} onChange={(event) => setFormData({...formData, other: event.target.value})} />
      </div>
    );
  }