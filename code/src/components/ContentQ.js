import React, { useState } from 'react';
/* import { name } from './NameQ'; */

/* const contentOpt = ['Chocolate', 'Wine', 'Books', 'Beauty products']; */

const ContentQ = () => {
  const [content, setContent, name] = useState('')

  return (
    <div className="container">
      <form>
      What would you be interested in receiving in your subscription box, {name}?
        <select onChange={(event) => setContent(event.target.value)} value={content}>
          <option value="">Select your option</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Wine">Wine</option>
          <option value="Books">Books</option>
          <option value="Beauty products">Beauty products</option>
        </select>
      </form>
    </div>
  )
}

export default ContentQ