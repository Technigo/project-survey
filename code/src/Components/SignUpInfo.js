import React from 'react'

export const SignUpInfo = ({ formData, setFormData }) => {
    return(
      <div className="sign-up-container">
        <input type="text" placeholder="First name..." value={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.value})} />
        <input type="text" placeholder="Last name..." value={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.value})} />
        <input type="text" placeholder="Email..." value={formData.email} onChange={(event) => setFormData({...formData, email: event.target.value})} />
      </div>
    );
  }