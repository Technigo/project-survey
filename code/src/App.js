import React from 'react';
import { Survey } from 'Components/Survey';

export const App = () => {
  return (
    <div className="survey-container">
      <img className="banner-image" src="https://images.unsplash.com/photo-1605063959681-3f84cac3d5a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80" alt="interior of a house" />
      <form>
        <Survey />
      </form>
    </div>
  );
}
