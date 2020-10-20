import React, {useState} from 'react';
import "./index.css";

export const App = () => {
   const [name, setName] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = event => {
     event.preventDefault();
   };

  return (
    <div className="App">
      <h1>Happy Tuesday!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          What's your name?
          <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
            />
        </label>
        <label>
          What's your Password? 
          <input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required 
          />
        </label>
      </form>
    </div>
  )
}
