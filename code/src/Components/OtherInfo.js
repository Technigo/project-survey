import React from 'react'

export const OtherInfo = ({ formData, setFormData }) => {
    return(
      <div className="other-info-container">
        <form>
        <select value={formData.spaceship} onChange={(event) => setFormData({...formData, spaceship: event.target.value})}>
        <option value="Antares">Antares</option>
        <option value="Falcon Heavy">Falcon Heavy</option>
        <option value="LauncherOne">LauncherOne</option>
        <option value="SpacesX Starship">SpaceX Starship</option>
        <option value="New Glenn">New Glenn</option>
        </select>
        </form>
      </div>
    );
  }