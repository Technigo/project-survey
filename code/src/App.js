import React from 'react';
import { Survey } from 'Components/Survey';

export const App = () => {
  return (
    <div className="survey-container">
      <img className="banner-image" src="https://images.unsplash.com/photo-1561223369-6e4b5e790972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="a red house in the snow" />
      <form>
        <Survey />
      </form>
    </div>
  );
}
