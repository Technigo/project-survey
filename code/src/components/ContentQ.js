import React from 'react';

const ContentQ = ({ content, OnContentInputChange, nextQ }) => {
  return (
    <form onSubmit={nextQ}>
      <h2>What would you be interested in receiving in your subscription box? </h2>
      <select onChange={OnContentInputChange} value={content} required>
        <option value="" disabled>Select your option</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Wine">Wine</option>
        <option value="Books">Books</option>
        <option value="Beauty products">Beauty products</option>
      </select>
      <button type="submit" label="next">Next</button>
    </form>
  )
}

export default ContentQ