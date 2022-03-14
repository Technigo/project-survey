import React, { useState } from 'react'

const Question1 = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <p className="question">
                What is your name?
            </p>
            <form>
                <input 
                    type="text" 
                    onChange={(event) => setName(event.target.value)}
                    value={name}>
                </input>
            </form>
        </div>
    );
  };
  
  export default Question1;