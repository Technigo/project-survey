import React, { useState } from 'react'

const Question1 = (props) => {
    const [userName, setName] = useState('');

    return (
        <div>
            <p className="question">
                What is your name? {userName} 
            </p>
                <input 
                    type="text" 
                    onChange={(event) => setName(event.target.value)}
                    value={userName}>
                </input>
        </div>
    );
  };
  
  export default Question1;