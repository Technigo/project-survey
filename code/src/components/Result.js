import React from 'react';

const Result = ({name, food, drink, email}) => {
  return (
    <section className="container">
      <div className="Result">
        <h1>Nice job {name}</h1>
      </div> 
      <div className="Result">
        <p>{food}</p> 
        <p><b>🧡 That's also our favourite pun! 🧡</b></p>
        </div>
        <div className="Result">
        <p>Why did the chicken cross the road? {drink}</p>
        <p><b>Sad, that's the worst chicken joke...</b></p>
        </div> 
        <div className="Result">
         
        <p>However, you definitely <b>have the potential</b> to become a stand-up comedian!</p>
        <h3> Welcome to our Academy</h3> 
        <p>✉️ We'll contact you at <b>{email}</b></p>
        </div>
    </section>
  );
}

export default Result
