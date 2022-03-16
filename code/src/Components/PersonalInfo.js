import React from 'react'

export const PersonalInfo = ({ formData, setFormData }) => {
    return(
      <div className="personal-info-container">
        <div>
          <lable>Male:</lable>
        <input type="radio" name="gender" text="First Name..." checked={formData.firstName} onChange={(event) => setFormData({...formData, firstName: event.target.checked})}/>
        </div>
        <div><lable>Female:</lable>
        <input type="radio" name="gender" placeholder="Last Name..." checked={formData.lastName} onChange={(event) => setFormData({...formData, lastName: event.target.checked})} />
        </div>
        <input type="text" placeholder="User Name..." value={formData.username} onChange={(event) => setFormData({...formData, username: event.target.value})} />
      </div>
    );
  }