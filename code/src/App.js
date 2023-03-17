/* eslint-disable linebreak-style */
import React from 'react';
import Name from './components/Name'

export const App = () => {
  return (
    <section className="main-container">
      <header>
        <h1>Survey</h1>
      </header>
      <div className="form-container">
        <form className="form">
          This is where the form will go. Mount components here.
          <input type="text" />
        </form>
        <div className="button-container">
          <button type="button">Next</button>
        </div>
      </div>
      <footer>
        <p>x/x</p>
      </footer>
    </section>
  );
}
